import React from 'react';
import './resumeSection.css';

function ResumeSection() {
	return (
		<div className="resumeSectionWrapper">
			<ul className="timeline">
				<li>Engineering @ LiveRamp</li>
				<li>Solutions Architect @ LiveRamp</li>
				<li>Professional Services @ Medallia</li>
				<li>Product Operations @ LiveRamp</li>
				<li>Professional Services @ Achievers</li>
				<li>Product @ Achievers</li>
				<li>Marketing @ Amphenol</li>
				<li>Product Operations @ BlackBerry</li>
				<li>Battery Engineering @ BlackBerry</li>
			</ul>
			<div className="timelineDetails">
				<h3>Full Stack Engineer</h3>
        <h4>September 2019 - Present</h4>
        <ul>
          <li>Lead OAuth project</li>
          <li>Scrum master</li>
          <li>Quality initiatives</li>
        </ul>
        <p></p>
			</div>
		</div>
	);
}

export default ResumeSection;
