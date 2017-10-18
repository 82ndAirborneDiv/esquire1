import React from 'react'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button'

const MainButton = ({ value, color, onClick }) => {
  return (
    <Button raised color={color} onClick={onClick}>{value}</Button>
  )
}

MainButton.propTypes = {
  value: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func
}

export default MainButton