import { describe, expect, test } from "bun:test";
import { isHappy, isUgly, maxScore, nthUglyNumber } from ".";

//202. Happy Number - Test
describe("Happy Number", () => {
  test("Happy number true", () => {
    expect(isHappy(19)).toBe(true);
  });

  test("Happy number false", () => {
    expect(isHappy(2)).toBe(false);
  });
});

//1422. Maximum Score After Splitting a String - Test
describe("Maximum Score", () => {
  test("Ex 1", () => {
    expect(maxScore("011101")).toBe(5);
  });

  test("Ex 2", () => {
    expect(maxScore("00111")).toBe(5);
  });

  test("Ex 2", () => {
    expect(maxScore("1111")).toBe(3);
  });
});

//263. Ugly Number
describe("Ugly number", () => {
  test("Ex 1", () => {
    expect(isUgly(6)).toBe(true);
  });

  test("Ex 2", () => {
    expect(isUgly(1)).toBe(true);
  });

  test("Ex 3", () => {
    expect(isUgly(14)).toBe(false);
  });
});

//264. Ugly Number II
describe("Ugly number the 2nd", () => {
  test("Ex 1", () => {
    expect(nthUglyNumber(10)).toBe(12);
  });

  test("Ex 2", () => {
    expect(nthUglyNumber(1)).toBe(1);
  });

  test("Ex 3", () => {
    expect(nthUglyNumber(1352)).toBe(402653184);
  });
});
