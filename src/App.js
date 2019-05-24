import React from 'react';
import Nav from './components/Nav';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './views/Home';
import Partners from './views/Partners';
import Projects from './views/Projects';
import Project from './views/Project';
import Members from './views/Members';
import Member from './views/Member';
import Dashboard from './views/Dashboard';

function App() {
  return (
		<div>
			<Router>
			<Nav />

					<Route path="/" exact component={Home}/>
					<Route path="/partners" exact component={Partners}/>
					<Route path="/projects" exact component={Projects}/>
					<Route path="/members" exact component={Members}/>
					<Route path="/dashboard" exact component={Dashboard}/>

					<Route path="/member/:id" component={Member}/> 
					<Route path="/project/:id" component={Project}/> 

			</Router>
		</div>
  );
}

export default App;
