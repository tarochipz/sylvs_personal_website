import React from 'react';
import './resumeSection.css';
import { data } from './data.js';

export class ResumeSection extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			jobTitle: data[0].jobTitle,
			date: data[0].date,
			jobDescription: data[0].jobDescription,
			active: 0,
		};
	}

	render() {
		return (
			<div className="resumeSectionWrapper">
				<ul className="timeline">
					{data.map((entry, index) => {
						return (
							<li
								className={this.state.active === index ? 'active' : ''}
								key={index}
								onClick={() => this.handleClick(index)}
							>
								{entry.company}
							</li>
						);
					})}
				</ul>
				<div className="timelineDetails">
					<h3>{this.state.jobTitle}</h3>
					<h4>{this.state.date}</h4>
					<ul>
						{this.state.jobDescription.map((entry) => {
							return <li>{entry}</li>;
						})}
					</ul>
				</div>
			</div>
		);
	}

	handleClick(index) {
		this.setState({
			jobTitle: data[index].jobTitle,
			date: data[index].date,
			jobDescription: data[index].jobDescription,
			active: index,
		});
	}
}

export default ResumeSection;
