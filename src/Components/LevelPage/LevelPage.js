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
          <h1 id='page-title'>{this.state.l.name}</h1>
          <p id='level-ul-title'>Categories:</p>
          <ul id='level-categories-list'>
            {this.state.l.categories.map(c =>
              <li id='level-category' key={c.id} onClick={(e) => this.setState({activeCategory: c, activeStrat: defaultStrat})}>{c.title}</li>
            )}
          </ul>
          {this.state.activeCategory.title !== null ?
            <div className='level-active-category'>
              <h2 id='active-category-title'>{this.state.activeCategory.title}</h2>
              <h3 id='active-category-exit'>{this.state.activeCategory.exits.normal ? 'Normal Exit' : ''}</h3>
              <ul id='active-strats'>
                {this.state.activeCategory.exits.normal ? this.state.activeCategory.exits.normal.strats.map(s => {
                  return (
                  <li id='level-strat' key={s.id} onClick={(e) => this.setState({activeStrat: s})}>
                    <hr />
                    {s.name}{s.time ? ` - ${s.time}` : ''} | Source: {s.source}
                    <br />
                    {s.id === this.state.activeStrat.id ? (
                      <>
                        <iframe title={s.name} width="570" height="320" src={s.link + '?rel=0'} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
                        <i>{s.desc === '' ? '' : <li>{s.desc}</li>}</i>
                      </>
                      ) : ''}
                  </li>
                  )
                }) : ''}
                <hr />
              </ul>
              <h3 id='active-category-exit'>{this.state.activeCategory.exits.secret ? 'Secret Exit' : ''}</h3>
              <ul id='active-strats'>
                {this.state.activeCategory.exits.secret ? this.state.activeCategory.exits.secret.strats.map(s => {
                  return (
                  <li id='level-strat' key={s.id} onClick={(e) => this.setState({activeStrat: s})}>
                    <hr />
                    {s.name}{s.time ? ` - ${s.time}` : ''} | Source: {s.source}
                    <br />
                    {s.id === this.state.activeStrat.id ? (
                      <>
                        <iframe title={s.name} width="570" height="320" src={s.link + '?rel=0'} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
                        <i>{s.desc === '' ? '' : <li>{s.desc}</li>}</i>
                      </>
                      ) : ''}
                  </li>
                  )
                }) : ''}
                <hr />
              </ul>
            </div>
          : ''}
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