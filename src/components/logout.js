import React from 'react';


function Logout({ onClick }) {
  return (
    <div>
      <span>You are logged in</span>
      <button onClick={onClick}>Logout</button>
    </div>
  );
}

export default Logout
