import RRule from 'rrule';

import computeMonthlyOn from './computeMonthlyOn';
import computeMonthlyOnThe from './computeMonthlyOnThe';

const computeMonthly = ({
  mode,
  interval,
  days,
  onThe,
}) => ({
  freq: RRule.MONTHLY,
  interval,
  ...(mode === 'on' ? computeMonthlyOn(days) : computeMonthlyOnThe(onThe)),
});

export default computeMonthly;
