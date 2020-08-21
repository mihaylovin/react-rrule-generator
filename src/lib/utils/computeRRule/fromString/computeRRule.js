import { rrulestr as RRuleObjectFromString } from 'rrule';
import moment from 'moment';

import { DATE_TIME_FORMAT, DATE_FORMAT } from '../../../constants/index';
import computeStartOnDate from './computeStartOnDate';
import computeEndOnDate from './computeEndOnDate';
import computeSummary from './computeSummary';
import computeFrequency from './computeFrequency';
import computeYearlyMode from './computeYearlyMode';
import computeYearlyOnMonth from './computeYearlyOnMonth';
import computeYearlyOnMonthday from './computeYearlyOnMonthday';
import computeYearlyOnTheMonth from './computeYearlyOnTheMonth';
import computeYearlyOnTheMonthday from './computeYearlyOnTheMonthday';
import computeYearlyOnTheWhich from './computeYearlyOnTheWhich';
import computeMonthlyMode from './computeMonthlyMode';
import computeMonthlyInterval from './computeMonthlyInterval';
import computeMonthlyOnDay from './computeMonthlyOnDay';
import computeMonthlyOnTheDay from './computeMonthlyOnTheDay';
import computeMonthlyOnTheWhich from './computeMonthlyOnTheWhich';
import computeWeeklyInterval from './computeWeeklyInterval';
import computeWeeklyDays from './computeWeeklyDays';
import computeWeekStartDay from './computeWeekStartDay';
import computeDailyInterval from './computeDailyInterval';
import computeHourlyInterval from './computeHourlyInterval';
import computeEndRepeatMode from './computeEndRepeatMode';
import computeEndRepeatAfter from './computeEndRepeatAfter';
import computeEndRepeatOnDate from './computeEndRepeatOnDate';

const computeRRule = (data, rrule) => {
  if (!rrule) {
    return data;
  }

  let newDataObj;
  try {
    const rruleObj = RRuleObjectFromString(rrule).origOptions;

    newDataObj = {
      ...data,
      start: {
        ...data.start,
        onDate: {
          date: moment(computeStartOnDate(data, rruleObj)).format(DATE_TIME_FORMAT),
          options: {
            ...data.start.onDate.options,
            weekStartsOnSunday: computeWeekStartDay(data, rruleObj),
          },
        },
      },
      end: {
        ...data.end,
        onDate: {
          date: moment(computeEndOnDate(data, rruleObj)).format(DATE_TIME_FORMAT),
          options: {
            ...data.end.onDate.options,
            weekStartsOnSunday: computeWeekStartDay(data, rruleObj),
          },
        },
      },
      summary: computeSummary(data, rruleObj),
      repeat: {
        ...data.repeat,
        frequency: computeFrequency(data, rruleObj),
        yearly: {
          ...data.repeat.yearly,
          mode: computeYearlyMode(data, rruleObj),
          on: {
            month: computeYearlyOnMonth(data, rruleObj),
            day: computeYearlyOnMonthday(data, rruleObj),
          },
          onThe: {
            month: computeYearlyOnTheMonth(data, rruleObj),
            day: computeYearlyOnTheMonthday(data, rruleObj),
            which: computeYearlyOnTheWhich(data, rruleObj),
          },
        },
        monthly: {
          ...data.repeat.monthly,
          mode: computeMonthlyMode(data, rruleObj),
          interval: computeMonthlyInterval(data, rruleObj),
          days: computeMonthlyOnDay(data, rruleObj),
          onThe: {
            day: computeMonthlyOnTheDay(data, rruleObj),
            which: computeMonthlyOnTheWhich(data, rruleObj),
          },
        },
        weekly: {
          interval: computeWeeklyInterval(data, rruleObj),
          days: computeWeeklyDays(data, rruleObj),
          options: {
            weekStartsOnSunday: computeWeekStartDay(data, rruleObj),
          },
        },
        daily: {
          interval: computeDailyInterval(data, rruleObj),
        },
        hourly: {
          interval: computeHourlyInterval(data, rruleObj),
        },
      },
      endRepeat: {
        ...data.endRepeat,
        mode: computeEndRepeatMode(data, rruleObj),
        after: computeEndRepeatAfter(data, rruleObj),
        onDate: {
          date: moment(computeEndRepeatOnDate(data, rruleObj)).format(DATE_FORMAT),
          options: {
            ...data.endRepeat.onDate.options,
            weekStartsOnSunday: computeWeekStartDay(data, rruleObj),
          },
        },
      },
      options: {
        ...data.options,
        weekStartsOnSunday: computeWeekStartDay(data, rruleObj),
      },
      error: null,
    };
  } catch (e) {
    return { ...data, error: { value: rrule, message: e } };
  }

  return newDataObj;
};

export default computeRRule;
