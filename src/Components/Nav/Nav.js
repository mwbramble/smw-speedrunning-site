import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import Seal from '../../Images/smwseal.png';
import './nav.css';

const bgActive = '';

export default class Nav extends Component{
  render(){
    return (
      <nav role='navigation' className='nav'>
        <Link to={'/'}><img src={Seal} id='seal' alt='SMW Seal' /></Link>
        <h1 id='title'>SMW Speedrunning Info</h1>
        <NavLink to={'/categories'} className='nav-link' activeStyle={{backgroundColor: {bgActive}}}>
          Categories
        </NavLink>
        <NavLink to={'/glossary'} className='nav-link' activeStyle={{backgroundColor: {bgActive}}}>
          Glossary
        </NavLink>
      </nav>
    )
  }
}