const computeMonthlyOnDay = (data, rruleObj) => {
  if (rruleObj.freq !== 1 || !rruleObj.bymonthday) {
    return data.repeat.monthly.days;
  }

  return rruleObj.bymonthday;
};

export default computeMonthlyOnDay;
