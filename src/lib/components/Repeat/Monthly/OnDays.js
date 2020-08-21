import React from 'react';
import PropTypes from 'prop-types';
import numericalFieldHandler from '../../../utils/numericalFieldHandler';
import translateLabel from '../../../utils/translateLabel';

const RepeatMonthlyOn = ({
  id,
  mode,
  on,
  days,
  hasMoreModes,
  handleChange,
  translations
}) => {
  const isActive = mode === 'on';

  const renderMonthInLines = (lineLength) => {
    
    const dayCheckboxes = [...new Array(31)].map((d, i) => i + 1).map((dayName) => 
                          (<label
                            htmlFor={`${id}-${dayName}`}
                            key={dayName}
                            disabled={!isActive}
                            style={{ 
                              borderRadius: 0,
                              width: "44px"
                            }}
                            className={`btn btn-primary ${(days.indexOf(dayName) > -1) ? 'active' : ''}`}
                          >
                          <input
                            type="checkbox"
                            id={`${id}-${dayName}`}
                            name={`repeat.monthly.days`}
                            className="form-control"
                            disabled={!isActive}
                            checked={days.indexOf(dayName) > -1}
                            onChange={(event) => {
                              const editedEvent = {
                                ...event,
                                target: {
                                  ...event.target,
                                  value: (days.indexOf(dayName) > -1) ? days.filter(d => d !== dayName) : [...days, dayName],
                                  name: event.target.name,
                                },
                              };

                              handleChange(editedEvent);
                            }}
                          />
                          {dayName}
                        </label>));

      let lines = [[]];
      let currentLine = 0;
      console.log(dayCheckboxes);

      dayCheckboxes.forEach((d, i) => {
        console.log(d & lineLength);
        if (i % lineLength != 0) {
          lines[currentLine].push(d);
        } else {
          currentLine = i/lineLength;
          lines[currentLine] = [d];
        }
      })

    console.log(lines);

    return lines.map(line => (
      <div className="btn-group btn-group-toggle offset-sm-2">
        {line}
      </div>
    ));
  }

  return (
    <div className={`form-group row d-flex align-items-sm-center ${!isActive && 'opacity-50'}`}>
      <div className="col-sm-1 offset-sm-2">
        {hasMoreModes && (
          <input
            id={id}
            type="radio"
            name="repeat.monthly.mode"
            aria-label="Repeat monthly on"
            value="on"
            checked={isActive}
            onChange={handleChange}
          />
        )}
      </div>
      <div className="col-sm-1">
        {translateLabel(translations, 'repeat.monthly.on_day')}
      </div>

      <div className="col-sm-2">
        <div className="form-group row">
            {renderMonthInLines(7)}
        </div>
        {/* <select
          id={`${id}-day`}
          name="repeat.monthly.on.day"
          aria-label="Repeat monthly on days"
          className="form-control"
          value={on.day}
          disabled={!isActive}
          onChange={numericalFieldHandler(handleChange)}
        >
          {[...new Array(31)].map((day, i) => <option key={i} value={i + 1}>{i + 1}</option>)}
        </select> */}
      </div>
    </div>
  );
};
RepeatMonthlyOn.propTypes = {
  id: PropTypes.string.isRequired,
  mode: PropTypes.oneOf(['on', 'on the']).isRequired,
  on: PropTypes.arrayOf(PropTypes.number).isRequired,
  hasMoreModes: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  translations: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default RepeatMonthlyOn;
