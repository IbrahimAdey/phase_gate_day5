function calculateCycle(startDate, cycleLength, periodLength) {
  const start = new Date(startDate);
  const nextPeriod = new Date(start);
  nextPeriod.setDate(start.getDate() + cycleLength);

  const ovulation = new Date(start);
  ovulation.setDate(start.getDate() + Math.floor(cycleLength / 2));

  const fertileStart = new Date(ovulation);
  fertileStart.setDate(ovulation.getDate() - 2);

  const fertileEnd = new Date(ovulation);
  fertileEnd.setDate(ovulation.getDate() + 2);

  const safe1Start = new Date(start);
  safe1Start.setDate(start.getDate() + periodLength);

  const safe1End = new Date(fertileStart);
  safe1End.setDate(fertileStart.getDate() - 1);

  const safe2Start = new Date(fertileEnd);
  safe2Start.setDate(fertileEnd.getDate() + 1);

  const safe2End = new Date(nextPeriod);
  safe2End.setDate(nextPeriod.getDate() - 1);

  return {
    next_period_start: nextPeriod.toISOString().slice(0, 10),
    next_ovulation_date: ovulation.toISOString().slice(0, 10),
    fertile_window: [
      fertileStart.toISOString().slice(0, 10),
      fertileEnd.toISOString().slice(0, 10)
    ],
    safe_periods: [
      [safe1Start.toISOString().slice(0, 10), safe1End.toISOString().slice(0, 10)],
      [safe2Start.toISOString().slice(0, 10), safe2End.toISOString().slice(0, 10)]
    ]
  };
}

module.exports = calculateCycle;