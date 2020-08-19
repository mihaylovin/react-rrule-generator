import React from 'react';
import PropTypes from 'prop-types';
import EndOnDate from './OnDate';

import translateLabel from '../../utils/translateLabel';

const End = ({
  id,
  end: {
    onDate,
  },
  handleChange,
  translations
}) => (
  <div className="px-3">
    <div className="form-group row">
      <div className="col-sm-2 text-sm-right">
        <label
          htmlFor={id}
          className="col-form-label"
        >
          <strong>
            {translateLabel(translations, 'end.label')}
          </strong>
        </label>
      </div>
      <EndOnDate id={id} onDate={onDate} handleChange={handleChange} translations={translations} />
    </div>
  </div>
);

End.propTypes = {
  id: PropTypes.string.isRequired,
  end: PropTypes.shape({
    onDate: PropTypes.object.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  translations: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default End;
