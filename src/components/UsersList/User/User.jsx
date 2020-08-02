import React from 'react'
import './User.scss'

const User = (props) => {

  return (
    <div className="user">
      {props.user.firstName} {props.user.lastName}
    </div>
  )
}

export default User;