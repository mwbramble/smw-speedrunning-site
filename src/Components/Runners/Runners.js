import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import RUNNERS from '../../Data/runnerdata';
import './runners.css';

export default class Runners extends Component {
  constructor(props){
    super(props);
    this.state = {
      display: 'all'
    }
  }
  
  sortRunners(){
    let opt = document.getElementById('runner-type').value;
    this.setState({display: opt});
  }
  
  render(){
    return (
      <section className='runners-container'>
        <h1>Runners</h1>
        <label for='runner-type'>Sort Runners By: </label>
        <select id='runner-type' onChange={() => this.sortRunners()}>
          <option value='all'>All</option>
          <option value='top10'>Top 10 Ranked Runner</option>
          <option value='lbmod'>Leaderboard Mod</option>
          <option value='discordmod'>Discord Mod</option>
        </select>
        <ul className='runner-list'>
          {RUNNERS.map(r => {
            if(this.state.display === 'all'){
              return (
                <li key={r.id}>
                  <Link to={`/runners/${r.id}`}>
                    {r.name}
                  </Link>
                </li>
              )
            }
            if(this.state.display === 'lbmod'){
              if(r.lbmod){
                return (
                  <li key={r.id}>
                    <Link to={`/runners/${r.id}`}>
                      {r.name}
                    </Link>
                  </li>
                )
              }
            }
            if(this.state.display === 'discordmod'){
              if(r.discordmod){
                return (
                  <li key={r.id}>
                    <Link to={`/runners/${r.id}`}>
                      {r.name}
                    </Link>
                  </li>
                )
              }
            }
            if(this.state.display === 'top10'){
              if(r.top10){
                return (
                  <li key={r.id}>
                    <Link to={`/runners/${r.id}`}>
                      {r.name}
                    </Link>
                  </li>
                )
              }
            }
            return null;
          })}
        </ul>
      </section>
    )
  }
}