const computeMonthlyOnDay = (data, rruleObj) => {
  if (rruleObj.freq !== 1 || !rruleObj.bymonthday) {
    return data.repeat.monthly.days;
  }

  if (Array.isArray(rruleObj.bymonthday)) {
    return rruleObj.bymonthday;
  }

  return [rruleObj.bymonthday];
};

export default computeMonthlyOnDay;
