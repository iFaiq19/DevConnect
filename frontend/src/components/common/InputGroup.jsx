import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const InputGroup = ({
  name,
  placeholder,
  value,
  onChange,
  icon,
  type,
  error,
}) => {
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text h-100">
          <i className={icon}></i>
        </span>
      </div>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className={classnames("form-control form-control-lg", {
          "is-invalid": error,
        })}
        placeholder={placeholder}
        name={name}
      />
      {{ error } && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

InputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  icon: PropTypes.string,
  type: PropTypes.string.isRequired,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

InputGroup.defaultProps = {
  type: "text",
};

export default InputGroup;
