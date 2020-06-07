import React from 'react';
import ReactDOM from 'react-dom';
import SvgBackground from './svgBackground.jsx';
import NavBar from './navBar.jsx';
import './index.css';

class App extends React.Component {
	render() {
		return (
			<div id="pageWrapper">
				<NavBar/>
				<SvgBackground/>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
