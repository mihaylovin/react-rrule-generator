import Vevent from '../../../vevent/';

import computeStart from './computeStart';
import computeRepeat from './computeRepeat';
import computeEndRepeat from './computeEndRepeat';
import computeOptions from './computeOptions';
import computeEnd from './computeEnd';
import computeSummary from './computeSummary';

const computeRRule = ({
  start,
  end,
  summary,
  repeat,
  endRepeat,
  options,
}) => {
  const veventObject = {
    ...computeStart(start),
    ...computeEnd(end),
    ...computeSummary(summary),
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
