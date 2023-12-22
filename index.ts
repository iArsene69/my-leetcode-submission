//202. Happy Number
export function isHappy(n: number): boolean {
  const nextNumber = (num: number) => {
    let newNumber = 0;
    while (num !== 0) {
      let digit = num % 10;
      newNumber += digit * digit;
      num = Math.floor(num / 10);
    }
    return newNumber;
  };

  let set: Set<number> = new Set<number>();
  while (n !== 1 && !set.has(n)) {
    set.add(n);
    n = nextNumber(n);
  }
  return n === 1;
}

//1422. Maximum Score After Splitting a String
export function maxScore(s: string): number {
  const len = s.length;
  let ones = 0;
  let tempScore = s[0] === "0" ? 1 : 0;
  let score = tempScore;

  for (let i = 1; i < len - 1; i++) {
    if (s[i] === "0") {
      tempScore += 1;
    } else {
      ones++;
      tempScore -= 1;
    }

    if (tempScore > score) {
      score = tempScore;
    }
  }

  ones += s[len - 1] === "1" ? 1 : 0;

  return ones + score;
}

//263. Ugly Number
export function isUgly(n: number): boolean {
  const maxDivisions = (x: number, y: number) => {
    while (x % y === 0) {
      x /= y;
    }
    return x;
  };
  if (n == 0) return false;
  n = maxDivisions(n, 2);
  n = maxDivisions(n, 3);
  n = maxDivisions(n, 5);

  return n === 1;
}

//264. Ugly Number II
export function nthUglyNumber(n: number): number {
  const dp: number[] = new Array(n).fill(0);
  dp[0] = 1;
  let x = 0,
    y = 0,
    z = 0;
  for (let i = 1; i < n; i++) {
    dp[i] = Math.min(dp[x] * 2, Math.min(dp[y] * 3, dp[z] * 5));
    if (dp[i] === 2 * dp[x]) x++;
    if (dp[i] === 3 * dp[y]) y++;
    if (dp[i] === 5 * dp[z]) z++;
  }
  return dp[n - 1];
}
