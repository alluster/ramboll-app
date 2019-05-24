import React, { useState, useEffect } from 'react';
import logo from '../../logo.png';
import LinkHOC from '../LinkHOC';

const Nav = () => {
	return (
		<nav className="navbar ">
		<div className="container-fluid">
			<div className="navbar-header">
			<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
				<span className="sr-only">Toggle navigation</span>
				<span className="icon-bar"></span>
				<span className="icon-bar"></span>
				<span className="icon-bar"></span>
			</button>
			<a className="navbar-brand" href="/"><img src={logo} height="30" /></a>
			</div>

			<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			<ul className="nav navbar-nav">
				<li><LinkHOC to="/dashboard">Dashboard</LinkHOC></li>
				<li><LinkHOC to="/projects">Projects</LinkHOC></li>
				<li><LinkHOC to="/members">Members</LinkHOC></li>
				<li><LinkHOC to="/partners">Partners</LinkHOC></li>

			</ul>
			
			<ul className="nav navbar-nav navbar-right">
				<li><a href="#">Login</a></li>
				<li className="dropdown">
				<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Settings <span className="caret"></span></a>
				<ul className="dropdown-menu">
					<li><a href="#">Action</a></li>
					<li><a href="#">Another action</a></li>
					<li><a href="#">Something else here</a></li>
					<li role="separator" className="divider"></li>
					<li><a href="#">Separated link</a></li>
				</ul>
				</li>
			</ul>
			</div>
		</div>
		</nav>

  )
}


  
export default Nav;
