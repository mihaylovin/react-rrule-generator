const computeEndOnDate = (data, rruleObj) => {
  if (!rruleObj.until) {
    return data.endRepeat.onDate.date;
  }

  return rruleObj.until;
};

export default computeEndOnDate;
