import moment from 'moment';

const computeEndRepeat = ({ mode, after, onDate: { date } }) => {
  const endRepeat = {};

  if (mode === 'After') {
    endRepeat.count = after;
  }

  if (mode === 'On date') {
    endRepeat.until = moment(date).format();
  }

  return endRepeat;
};

export default computeEndRepeat;
