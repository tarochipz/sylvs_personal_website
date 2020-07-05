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
					<div className='icon'>
						<FontAwesomeIcon color='red' size="1.5x" icon={faLinkedin} />
					</div>
					<div className='icon'>
						<FontAwesomeIcon color='red' size="1.5x"  icon={faGithubSquare} />
					</div>
					<div className='icon'>
						<FontAwesomeIcon color='red' size="1.5x"  icon={faInstagram} />
					</div>
					<div className='icon'>
						<FontAwesomeIcon color='red' size="1.5x"  icon={faEnvelope} />
					</div>
				</div>
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
