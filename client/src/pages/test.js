import React from 'react';
var users = require('../utils/arraySteps');


const Test = () => {
  return (
    <div className='py-[80px]'>
      <h1>Hi</h1>
      {
        users.map((user, i) => (
          <div key={i}>{user.name}</div>
        ))
      }
    </div>
  )
}

export default Test