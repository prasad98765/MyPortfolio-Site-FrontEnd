import React, { Component } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Profile from '../../components/pages/profile/Profile';
import About from '../../components/pages/about/About';
import Skills from '../../components/pages/skills/Skills';
import Experiences from '../../components/pages/experiences/Experiences';
import Educations from '../../components/pages/educations/Educations';
import Competencies from './Core-Competencies/Competencies'
export default class Home extends Component {
	render() {
		return (
			<section>
				<Navbar />
				<div className='container'>
					
						<div className='card'>
							<Profile />
						</div>
						<div className='row'>
						<div className='card'>
							<About />
							<Educations />
							<Skills />
							<Competencies />
							<Experiences />
						</div>
					</div>
				</div>
			</section>
		);
	}
}
