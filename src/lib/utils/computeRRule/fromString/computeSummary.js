const computeSummary = (data, rruleObj) => {
    if (!rruleObj.summary) {
      return data.summary;
    }
  
    return rruleObj.summary;
  };
  export default computeSummary;