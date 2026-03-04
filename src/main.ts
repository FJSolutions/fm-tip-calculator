import "./styles/style.css"
import Alpine from 'alpinejs'
import Decimal from "decimal.js";

// @ts-ignore
window.Alpine = Alpine

export const alpineData = Alpine.reactive({
  amount: new Decimal(0),
  tipPercent: new Decimal(0),
  noPeople: new Decimal(1),
  showCustomTip: false,

  resetData: function () {
    this.amount = new Decimal(0)
    this.tipPercent = new Decimal(0)
    this.noPeople = new Decimal(1)
    this.showCustomTip = false
  },

  escapeCustomAmount: function (e: KeyboardEvent) {
    if (e.key === "Escape") {
      e.preventDefault()
      this.showCustomTip = false
    }
  },

  parseInput: function (e: Event) {
    const input = e.target as HTMLInputElement;
    const stringValue = input.value;
    if (!stringValue || stringValue.trim() === "") {
      return Decimal(0)
    }
    const no = Number.parseFloat(input.value)
    if(Number.isNaN(no)) {
      return Decimal(0)
    }
    console.log(stringValue, no)
    return new Decimal(no)
  },

  setAmount(e: Event) {
    this.amount = this.parseInput(e)
  },

  setTipPercent(no: number) {
    this.tipPercent = new Decimal(no)
    this.showCustomTip = false
  },

  setCustomTip(e: Event) {
    this.tipPercent = this.parseInput(e)
  },

  setNoPeople(e: Event) {
    this.noPeople = this.parseInput(e);
  },

  getAmount() {
    return this.amount.toFixed(2).toString();
  },

  totalTip() {
    const tip = this.tipPercent.dividedBy(new Decimal(100)).mul(this.amount);
    // console.log(tip.toFixed(4));
    return tip
  },

  totalPerPerson() {
    const total = this.amount.add(this.totalTip()).dividedBy(this.noPeople);
    return `$ ${total.toFixed(2)}`
  },

  totalTipPerPerson() {
    const total = this.totalTip().dividedBy(this.noPeople);
    return `$ ${total.toFixed(2)}`
  },
})

Alpine.data("tipCalculator", () => alpineData)

Alpine.start()