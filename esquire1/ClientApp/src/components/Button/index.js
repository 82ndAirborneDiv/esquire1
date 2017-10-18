import React from 'react'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button'

const style = {
  marginLeft: '10px'
}

const MainButton = ({ value, color, onClick }) => {
  return (
    <Button raised color={color} onClick={onClick} style={style}>{value}</Button>
  )
}

MainButton.propTypes = {
  value: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
}

export default MainButton