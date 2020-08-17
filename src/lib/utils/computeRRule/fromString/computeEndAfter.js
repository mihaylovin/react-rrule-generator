const computeEndAfter = (data, rruleObj) => {
  if (!rruleObj.count && rruleObj.count !== 0) {
    return data.endRepeat.after;
  }

  return rruleObj.count;
};

export default computeEndAfter;
