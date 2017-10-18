import React from 'react'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField'

const TextInput = ({ label, placeholder, onChange, name, value}) => {
  return (
    <TextField margin="normal" label={label} value={value} placeholder={placeholder} name={name} onChange={onChange} />
  )
}

TextInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.string
}

export default TextInput