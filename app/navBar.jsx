import React from 'react';
import './navBar.css';

class NavBar extends React.Component {
	render() {
		return (
      <div className="navContainer">
        <h1 className='logo'>SC</h1>
				<ul className='menu'>
					<li href='#'>Home</li>
					<li href='#'>About</li>
					<li href='#'>Resume</li>
					<li href='#'>Photography</li>
					<li href='#'>Food</li>
				</ul>
      </div>
		);
	}
}

export default NavBar;
