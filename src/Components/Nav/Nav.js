// TODO: make dark mode toggle look better

import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import Seal from '../../Images/smwseal.png';
import Star from '../../Images/star.png';
import Moon from '../../Images/moon.png';
import './nav.css';

export default class Nav extends Component{
  componentDidMount(){
    const themeSwitch = document.querySelector(`.theme-switch input[type='checkbox']`);
    themeSwitch.addEventListener('change', this.switchTheme, false);

    const currTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
    if(currTheme){
      document.documentElement.setAttribute('data-theme', currTheme);

      if(currTheme === 'dark'){
        themeSwitch.checked = true;
      }
    }
  }

  switchTheme(e){
    if(e.target.checked){
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
    else{
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }

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
            <NavLink to={'/tutorials'} className='nav-link'>
              Tutorials
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
        <div className='theme-switch-container'>
          <img src={Star} id='theme-icon' alt='Star' />
          <label className='theme-switch' htmlFor='toggle-cbox'>
            <input type='checkbox' id='toggle-cbox' />
            <div className='slider round'></div>
          </label>
          <img src={Moon} id='theme-icon' alt='Moon' />
        </div>
      </nav>
    )
  }
}