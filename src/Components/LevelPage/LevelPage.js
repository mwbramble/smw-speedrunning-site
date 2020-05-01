import React, {Component} from 'react';
import LEVELS from '../../Data/leveldata';
import './levelpage.css';

export default class LevelPage extends Component{
  constructor(props){
    super(props);
    this.state = {
      l: LEVELS.filter(l => l.id === this.props.match.params.id)[0],
      activeCategory: {
        title: null,
        exits: {
          normal: null,
          secret: null
        }
      },
      activeStrat: {
        id: null,
        name: null,
        time: null,
        link: null,
        desc: null,
        source: null
      }
    };
  }

  render(){
    const defaultStrat = {
      id: null,
      name: null,
      time: null,
      link: null,
      desc: null,
      source: null
    }

    return (
      <section className='level-page-container'>
        <div className='level-container'>
          <h1>{this.state.l.name}</h1>
          <p id='level-ul-title'>Categories:</p>
          <ul id='level-categories-list'>
            {this.state.l.categories.map(c =>
              <li id='level-category' key={c.id} onClick={(e) => this.setState({activeCategory: c, activeStrat: defaultStrat})}>{c.title}</li>
            )}
          </ul>
          <div className='level-active-category'>
            <h2>{this.state.activeCategory.title}</h2>
            <h3>{this.state.activeCategory.exits.normal ? 'Normal Exit' : ''}</h3>
            <ul className='active-strats-normal'>
              {this.state.activeCategory.exits.normal ? this.state.activeCategory.exits.normal.strats.map(s => {
                return (
                <li id='level-category' key={s.id} onClick={(e) => this.setState({activeStrat: s})}>
                  {s.name}{s.time ? ` - ${s.time}` : ''}
                  <br />
                  {s.id === this.state.activeStrat.id ? (
                    <ul id={s.id}>
                      <li><a href={s.link}>Link</a></li>
                      {s.desc === '' ? '' : <li>{s.desc}</li>}
                      <li>Source: {s.source}</li>
                    </ul>
                    ) : ''}
                </li>
                )
              }) : ''}
            </ul>
            <h3>{this.state.activeCategory.exits.secret ? 'Secret Exit' : ''}</h3>
            <ul className='active-strats-secret'>
              {this.state.activeCategory.exits.secret ? this.state.activeCategory.exits.secret.strats.map(s => {
                return (
                <li key={s.id} onClick={(e) => this.setState({activeStrat: s})}>
                  {s.name}{s.time ? ` - ${s.time}` : ''}
                  <br />
                  {s.id === this.state.activeStrat.id ? (
                    <ul id={s.id}>
                      <li><a href={s.link}>Link</a></li>
                      {s.desc === '' ? '' : <li>{s.desc}</li>}
                      <li>Source: {s.source}</li>
                    </ul>
                    ) : ''}
                </li>
                )
              }) : ''}
            </ul>
          </div>
        </div>
        <div className='level-info'>
          <p id='info-title'>Overworld Location</p>
          <img id='level-image' src={require(`../../Images/Levels/${this.state.l.id}.png`)} alt={this.state.l.name} />
          <p id='info-text'>
            <b>Available Powerups:</b> {this.state.l.powerups.join(', ')}<br />
            This level {this.state.l.dragoncoins ? 'has' : 'does not have'} Dragon Coins{this.state.l.moon ? ' and a Moon' : ''}.
          </p>
        </div>
      </section>
    )
  }
}