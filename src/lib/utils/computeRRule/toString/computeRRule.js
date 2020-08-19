import Vevent from '../../../vevent/';

import computeStart from './computeStart';
import computeRepeat from './computeRepeat';
import computeEndRepeat from './computeEndRepeat';
import computeOptions from './computeOptions';
import computeEnd from './computeEnd';

const computeRRule = ({
  start,
  end,
  repeat,
  endRepeat,
  options,
}) => {
  const veventObject = {
    ...computeStart(start),
    ...computeEnd(end),
    rrule: {
      ...computeRepeat(repeat),
      ...computeEndRepeat(endRepeat),
      ...computeOptions(options)
    },
  };
  const vevent = new Vevent(veventObject);
  return vevent.toString();
};

export default computeRRule;
