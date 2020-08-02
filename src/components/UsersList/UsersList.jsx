import React from 'react';
import './UsersList.scss';
import User from './User/User';

const UsersList = (props) => {
  
  const Hint = (
    <div className="users__hint">
      <p>Hi there <span role="img" aria-label="waving-hand">👋</span></p>
      <p>Please hover over any month!</p>        
      </div>
    )

  return (
    <div className="users">
      <div className="users__container">
        <div className="users__title">
          <p>\ Awesome dudes <span role="img" aria-label="eyes">👀</span>/</p>
        </div>
        {
          props.users.length !== 0 ? 
            <ul>
              {props.users.map(user => <li key={user.id}><User user={user} /></li>)}
            </ul> :
            Hint
        }
      </div>

    </div>
  )
}

export default UsersList;