import React from 'react';
import ReactDOM from 'react-dom';
import SvgBackground from './svgBackground.jsx';
import NavBar from './navBar.jsx';
import './index.css';

class App extends React.Component {
	render() {
		return (
			<div id="pageWrapper">
				<div className="nav">
					<NavBar />
				</div>
				<div className="textOverlay">
					<h2>
						Hi, I'm Sylvia!
						A full stack engineer based in San Francisco, from Toronto.
					</h2>
				</div>
				<SvgBackground />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
