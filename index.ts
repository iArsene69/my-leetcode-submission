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
