import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './home.css';

export default class Home extends Component{
  render(){
    return (
      <section className='home-container'>
        <h1>Welome to the home of all things SMW Speedrunning!</h1>
        <p>Need to learn some strats? Be sure to check out the <b><Link to={'/levels'}>level pages</Link></b>.</p>
        <p>Don't know what category to run? Visit the <b><Link to={'/categories'}>categories section</Link></b> to learn more about them.</p>
        <p>Did you hear an SMW runner say something and you didn't know what they were talking about? Take a look at the <b><Link to={'/glossary'}>glossary</Link></b>.</p>
        <p>Need a link to the Practice ROM? Find that and much more on the <b><Link to={'/resources'}>resources page</Link></b>.</p>
      </section>
    )
  }
}