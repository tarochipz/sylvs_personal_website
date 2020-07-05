import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavBar from './navBar.jsx';
import SvgBackground from './svgBackground.jsx';
import AboutSection from './aboutSection.jsx';
import ResumeSection from './resumeSection.jsx';
import Footer from './footer.jsx';

class App extends React.Component {
	render() {
		return (
			<div className='homepageWrapper'>
				<div className='nav'>
					<NavBar />
				</div>
				<div className='textOverlay'>
					<h2>Hi, I'm Sylvia! A full stack engineer based in San Francisco, from Toronto.</h2>
				</div>
				<SvgBackground />
				<AboutSection />
				<ResumeSection />
				{/* <Footer/> */}
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
