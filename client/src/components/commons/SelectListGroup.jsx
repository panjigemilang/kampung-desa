import React from "react"
import classnames from "classnames"
import PropTypes from "prop-types"

const SelectListGroup = ({
  name,
  info,
  errors,
  value,
  onChange,
  options,
  disabled
}) => {
  const selectOptions = options.map(option => (
    <option key={option.label} value={option.value}>
      {option.label}
    </option>
  ))
  return (
    <div className="form-group">
      {info && <small className="form-text text-muted">{info}</small>}
      <select
        className={classnames("form-control form-control-lg", {
          "is-invalid": errors
        })}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
      >
        {selectOptions}
      </select>
      {errors && <div className="invalid-feedback">{errors}</div>}
    </div>
  )
}

SelectListGroup.propTypes = {
  name: PropTypes.string.isRequired,
  info: PropTypes.string,
  errors: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired
}

export default SelectListGroup
