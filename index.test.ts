import { describe, expect, test } from "bun:test";
import { isHappy, maxScore } from ".";

//202. Happy Number - Test
describe("Happy Number", () => {
    test("Happy number true", () => {
        expect(isHappy(19)).toBe(true)
    })
    
    test("Happy number false", () => {
        expect(isHappy(2)).toBe(false)
    })
})

//1422. Maximum Score After Splitting a String - Test
describe("Maximum Score", () => {
    test("Ex 1", () => {
        expect(maxScore("011101")).toBe(5)
    })

    test("Ex 2", () => {
        expect(maxScore("00111")).toBe(5)
    })

    test("Ex 2", () => {
        expect(maxScore("1111")).toBe(3)
    })
})