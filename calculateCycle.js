const readline = require("readline");

class MenstrualCycle {
  constructor(lastPeriodStart, cycleLength, periodLength) {
    this.lastPeriodStart = new Date(lastPeriodStart);
    this.cycleLength = cycleLength;
    this.periodLength = periodLength;
  }

  addDays(date, days) {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  formatDate(date) {
    return date.toISOString().slice(0, 10);
  }

  calculateNextPeriod() {
    return this.addDays(this.lastPeriodStart, this.cycleLength);
  }

  calculateOvulation() {
    return this.addDays(this.lastPeriodStart, Math.floor(this.cycleLength / 2));
  }

  calculateFertileWindow() {
    const ovulation = this.calculateOvulation();
    return [this.addDays(ovulation, -2), this.addDays(ovulation, 2)];
  }

  calculateSafePeriods() {
    const [fertileStart, fertileEnd] = this.calculateFertileWindow();
    const safe1Start = this.addDays(this.lastPeriodStart, this.periodLength);
    const safe1End = this.addDays(fertileStart, -1);
    const safe2Start = this.addDays(fertileEnd, 1);
    const safe2End = this.addDays(this.calculateNextPeriod(), -1);

    return [
      [safe1Start, safe1End],
      [safe2Start, safe2End],
    ];
  }

  getCycleInfo() {
    const nextPeriod = this.calculateNextPeriod();
    const ovulation = this.calculateOvulation();
    const [fertileStart, fertileEnd] = this.calculateFertileWindow();
    const safePeriods = this.calculateSafePeriods();

    return (
      Next Period Start: ${this.formatDate(nextPeriod)}\n +
      Ovulation Date: ${this.formatDate(ovulation)}\n +
      Fertile Window: ${this.formatDate(fertileStart)} to ${this.formatDate(fertileEnd)}\n +
      Safe Periods:\n +
      `  1. ${this.formatDate(safePeriods[0][0])} to ${this.formatDate(safePeriods[0][1])}\n` +
      `  2. ${this.formatDate(safePeriods[1][0])} to ${this.formatDate(safePeriods[1][1])}`
    );
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the start date of your last period (yyyy-mm-dd): ", (lastPeriodStart) => {
  rl.question("Enter your cycle length (in days, e.g. 28): ", (cycleLength) => {
    rl.question("Enter your period length (in days, e.g. 5): ", (periodLength) => {
      const cycle = new MenstrualCycle(lastPeriodStart, parseInt(cycleLength), parseInt(periodLength));
      console.log("\n=== Your Menstrual Cycle Info ===");
      console.log(cycle.getCycleInfo());
      rl.close();
    });
  });
});