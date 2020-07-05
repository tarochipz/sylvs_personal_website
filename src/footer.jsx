import React from 'react';
import './footer.css';

function Footer() {
	return (
		<div className="footerWrapper">
			<a href="https://github.com/tarochipz/sylvs_personal_website" target="_blank" className="footerLink">
				Designed & built w/ &#x1F495; by Sylvia Cung &#169; {new Date().getFullYear()}
			</a>
		</div>
	);
}

export default Footer;
