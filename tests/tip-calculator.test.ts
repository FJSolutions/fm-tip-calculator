import { describe, expect, it, beforeEach } from "vitest"
import { alpineData } from "../src/main";

describe("tipCalculator", () => {
  const tipCalculator = alpineData;

  beforeEach(async () => {
    new Promise(() => tipCalculator.resetData())
  })

  it("has an amount", () => {
    expect(tipCalculator).to.not.toBeUndefined()
  })

  it("has default values", () => {
    expect(tipCalculator.tipPercent.toNumber()).to.eq(0)
    expect(tipCalculator.amount.toNumber()).to.eq(0)
    expect(tipCalculator.noPeople.toNumber()).to.eq(1)
    expect(tipCalculator.showCustomTip).to.eq(false)
  })
})