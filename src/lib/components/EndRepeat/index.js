import React from 'react';
import PropTypes from 'prop-types';
import EndAfter from './After';
import EndOnDate from './OnDate';

import translateLabel from '../../utils/translateLabel';

const EndRepeat = ({
  id,
  endRepeat: {
    mode,
    after,
    onDate,
    options,
  },
  handleChange,
  translations
}) => {
  const isOptionAvailable = option => !options.modes || options.modes.indexOf(option) !== -1;
  const isOptionSelected = option => mode === option;

  return (
    <div className="px-3">
      <div className="form-group row">
        <div className="col-sm-2 text-sm-right">
          <label
            htmlFor={id}
            className="col-form-label"
          >
            <strong>
              {translateLabel(translations, 'endRepeat.label')}
            </strong>
          </label>
        </div>
        <div className="col-sm-3">
          <select
            name="endRepeat.mode"
            id={id}
            className="form-control"
            value={mode}
            onChange={handleChange}
          >
            {isOptionAvailable('Never') && <option value="Never">{translateLabel(translations, 'endRepeat.never')}</option>}
            {isOptionAvailable('After') && <option value="After">{translateLabel(translations, 'endRepeat.after')}</option>}
            {isOptionAvailable('On date') && <option value="On date">{translateLabel(translations, 'endRepeat.on_date')}</option>}
          </select>
        </div>

        {
          isOptionSelected('After') &&
          <EndAfter
            id={`${id}-after`}
            after={after}
            handleChange={handleChange}
            translations={translations}
          />
        }
        {
          isOptionSelected('On date') &&
          <EndOnDate
            id={`${id}-onDate`}
            onDate={onDate}
            handleChange={handleChange}
            translations={translations}
          />
        }

      </div>
    </div>
  );
};

EndRepeat.propTypes = {
  id: PropTypes.string.isRequired,
  endRepeat: PropTypes.shape({
    mode: PropTypes.string.isRequired,
    after: PropTypes.number.isRequired,
    onDate: PropTypes.object.isRequired,
    options: PropTypes.shape({
      modes: PropTypes.arrayOf(PropTypes.oneOf(['Never', 'After', 'On date'])),
      weekStartsOnSunday: PropTypes.bool,
    }).isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  translations: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default EndRepeat;
