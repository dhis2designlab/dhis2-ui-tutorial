import React from 'react';

import HeaderBar from './headerbar.js'

function Settings({ onClick, user }) {
  return (
    <>
      <HeaderBar user={user}/>
      <div >
        <h1>SettingsPage</h1>
        <span>You are logged in</span>
        <button onClick={onClick}>Logout</button>
      </div>
    </>

)
}
export default Settings;
