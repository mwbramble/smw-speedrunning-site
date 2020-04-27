import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import RUNNERS from '../../Data/runnerdata';
import './runners.css';

export default class Runners extends Component {
  render(){
    return (
      <section className='runners-container'>
        <h1>Runners</h1>
        <ul className='runnerList'>
          {RUNNERS.map(runner =>
            <li key={runner.id}>
              <Link to={`/runners/${runner.id}`}>
                {runner.name}
              </Link>
            </li>
          )}
        </ul>
      </section>
    )
  }
}