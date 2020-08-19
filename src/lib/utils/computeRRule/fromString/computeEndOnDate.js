const computeEndOnDate = (data, rruleObj) => {
    if (!rruleObj.dtend) {
      return data.end.onDate.date;
    }
  
    return rruleObj.dtend;
  };
  export default computeEndOnDate;
  