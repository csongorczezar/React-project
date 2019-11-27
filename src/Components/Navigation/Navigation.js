import React from 'react';
import '../CSS/global-styles.css';
import './Navigation.css';
import { Link } from 'react-router-dom';



function Navigation() {
	return (
     	<div className="App">
	      <Link to="/Dashboard">
	      	<i className="fas fa-arrow-left"></i>
	      </Link>
	      <Link to="/">
	      	<i className="fas fa-times"></i>
	      </Link>
	    </div>
     )
}


export default Navigation;