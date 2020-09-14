import React from 'react';

import HeaderBar from './headerbar.js'

function Settings({ onClick }) {
  return (
    <>
      <HeaderBar />
      <div >
        <h1>SettingsPage</h1>
        <span>You are logged in</span>
        <button onClick={onClick}>Logout</button>
      </div>
    </>

)
}
export default Settings;
