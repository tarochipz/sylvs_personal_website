import React from 'react';
import './navBar.css';

class NavBar extends React.Component {
	render() {
		return (
			<div className="navContainer">
				<h1 className="logo">SC</h1>
				<ul className="menu">
					<a href="#">
						<li>Home</li>
					</a>
					<a href="#">
						<li>About</li>
					</a>
					<a href="#">
						<li>Resume</li>
					</a>
					<a href="#">
						<li>Photography</li>
					</a>
					<a href="#">
						<li>Food</li>
					</a>
				</ul>
			</div>
		);
	}
}

export default NavBar;
