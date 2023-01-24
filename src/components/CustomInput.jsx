import React from 'react';
import PropTypes from 'prop-types';

const CustomInput = ({ name, label, type, pattern, isRequired }) => {
  return (
    <div>
      {/* <label htmlFor={name}>{label}</label> */}
      <input
        type={type}
        name={name}
        placeholder={label}
        pattern={pattern}
        required={isRequired}
      />
    </div>
  );
};
CustomInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  pattern: PropTypes.string,
  isRequired: PropTypes.bool.isRequired,
};

export default CustomInput;
