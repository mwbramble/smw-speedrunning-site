import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import Seal from '../../Images/smwseal.png';
import './nav.css';

export default class Nav extends Component{
  render(){
    return (
      <nav role='navigation' className='nav'>
        <Link to={'/'}><img src={Seal} id='seal' alt='SMW Seal' /></Link>
        <h1 id='title'>SMW Speedrunning Info</h1>
        <ul className='nav-link-list'>
          <li>
            <NavLink to={'/levels'} className='nav-link'>
              Levels
            </NavLink>
          </li>
          <li>
            <NavLink to={'/categories'} className='nav-link'>
              Categories
            </NavLink>
          </li>
          <li>
            <NavLink to={'/glossary'} className='nav-link'>
              Glossary
            </NavLink>
          </li>
          <li>
            <NavLink to={'/runners'} className='nav-link'>
              Runners
            </NavLink>
          </li>
          <li>
            <NavLink to={'/contact'} className='nav-link'>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    )
  }
}