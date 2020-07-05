import React from 'react';
import './navBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

class NavBar extends React.Component {
	render() {
		return (
			<div className="navContainer">
				<h1 className="logo">SC</h1>
				<div className="socialIconWrapper">
					<a href="https://www.linkedin.com/in/sylviacung/" target="_blank" className="icon">
						<FontAwesomeIcon color="red" size="1.5x" icon={faLinkedin} />
					</a>
					<a href="https://github.com/tarochipz" target="_blank" className="icon">
						<FontAwesomeIcon color="red" size="1.5x" icon={faGithubSquare} />
					</a>
					<a href="https://www.instagram.com/tarochipz/" target="_blank" className="icon">
						<FontAwesomeIcon color="red" size="1.5x" icon={faInstagram} />
					</a>
					<a href="mailto:sylvcung@gmail.com" target="_blank" className="icon">
						<FontAwesomeIcon color="red" size="1.5x" icon={faEnvelope} />
					</a>
				</div>

				<ul className="menu">
					<a href="#">
						<li>Home</li>
					</a>
					<a href="#about">
						<li>About</li>
					</a>
					<a href="#resume">
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
