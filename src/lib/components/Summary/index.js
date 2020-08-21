import React from 'react';
import PropTypes from 'prop-types';

import translateLabel from '../../utils/translateLabel';

const Summary = ({
  id,
  summary,
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
            {translateLabel(translations, 'summary.label')}
          </strong>
        </label>
      </div>
      <div className="col-6 col-sm-3">
        <input
            type="text" 
            className="form-control"
            value={summary} 
            name="summary"
            onChange={handleChange} 
            />
        </div>
    </div>
  </div>
);

Summary.propTypes = {
  id: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  translations: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default Summary;