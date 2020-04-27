import React, {Component} from 'react';
import RUNNERS from '../../Data/runnerdata';
import './runnerpage.css';

export default class RunnerPage extends Component {
  render(){
    const runner = RUNNERS.filter(r => r.id === this.props.match.params.id);
    const twitch = `https://twitch.tv/${runner[0].links.twitch}`;
    const youtube = `https://youtube.com/${runner[0].links.youtube}`;
    const twitter = `https://twitter.com/${runner[0].links.twitter}`;
    const srcom = `https://speedrun.com/${runner[0].links.srcom}`;
    return (
      <section className='runnerpage-container'>
        <h1>{runner[0].name}</h1>
        <h3 id='location'>{runner[0].location.subcountry}, {runner[0].location.country} | Runner Since {runner[0].began}</h3>
        <ul id='socials'>
          <li><a href={twitch}>Twitch</a></li>
          <li><a href={youtube}>YouTube</a></li>
          <li><a href={twitter}>Twitter</a></li>
          <li>Discord: @{runner[0].links.discord}</li>
          <li><a href={srcom}>speedrun.com</a></li>
        </ul>
        <p id='bio'>{runner[0].bio}</p>
      </section>
    )
  }
}