import React from 'react';
import './App.css';

function SideMenu(props) {
  return (
    <ul className="menu">
      <li><a href="#">Dashboard</a></li>
      <li><a href="#">Blood Request</a></li>
      <li><a href="#">Donation Request</a></li>
      <li><a href="#">Donors</a></li>
      <li><a href="#">Recipients</a></li>
      <li><a href="#">About</a></li>
    </ul>
  );
}

function Sidebar(props) {
  return (
    <div className="sidebar">
      <SideMenu />
    </div>
  );
}

function Header(props) {
  const buttonStyle = {
    position: 'absolute',
    top: '1cm',
    left: '35cm'
  };

  return (
    <div className="header">
      <button onClick={props.onExitClick} style={buttonStyle}>Exit</button>
    </div>
  );
}

function AdminDash(props) {
  function handleExitClick() {
    // Code to handle exit button click
  }

  return (
    <div className="admin-dash">
      <Sidebar />
      <Header onExitClick={handleExitClick} />
      <div className="content">
        {/* Content goes here */}
      </div>
    </div>
  );
}

export default AdminDash;
