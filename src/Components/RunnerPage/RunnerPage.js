import React, {Component} from 'react';
import RUNNERS from '../../Data/runnerdata';
import './runnerpage.css';

export default class RunnerPage extends Component {
  findFlag(country){
    if(country === 'Australia'){
      return <img id='runner-flag' src={require('../../Images/Flags/Australia.png')} alt='Australia Flag' />
    }
    if(country === 'Brazil'){
      return <img id='runner-flag' src={require('../../Images/Flags/Brazil.png')} alt='Brazil Flag' />
    }
    if(country ==='Canada'){
      return <img id='runner-flag' src={require('../../Images/Flags/Canada.png')} alt='Canada Flag' />
    }
    if(country ==='Chile'){
      return <img id='runner-flag' src={require('../../Images/Flags/Chile.png')} alt='Chile Flag' />
    }
    if(country ==='England'){
      return <img id='runner-flag' src={require('../../Images/Flags/England.png')} alt='England Flag' />
    }
    if(country ==='France'){
      return <img id='runner-flag' src={require('../../Images/Flags/France.png')} alt='France Flag' />
    }
    if(country ==='Germany'){
      return <img id='runner-flag' src={require('../../Images/Flags/Germany.png')} alt='Germany Flag' />
    }
    if(country ==='Ireland'){
      return <img id='runner-flag' src={require('../../Images/Flags/Ireland.png')} alt='Ireland Flag' />
    }
    if(country ==='Italy'){
      return <img id='runner-flag' src={require('../../Images/Flags/Italy.png')} alt='Italy Flag' />
    }
    if(country ==='Japan'){
      return <img id='runner-flag' src={require('../../Images/Flags/Japan.png')} alt='Japan Flag' />
    }
    if(country === 'Sweden'){
      return <img id='runner-flag' src={require('../../Images/Flags/Sweden.png')} alt='Sweden Flag' />
    }
    if(country === 'USA'){
      return <img id='runner-flag' src={require('../../Images/Flags/USA.png')} alt='USA Flag' />
    }
    else return '';
  }

  render(){
    const r = RUNNERS.filter(r => r.id === this.props.match.params.id)[0];
    const twitch = `https://twitch.tv/${r.links.twitch}`;
    const youtube = `https://youtube.com/${r.links.youtube}`;
    const twitter = `https://twitter.com/${r.links.twitter}`;
    const srcom = `https://speedrun.com/${r.links.srcom}`;
    
    return (
      <section className='runnerpage-container'>
        <h1>{r.name}</h1>
        <h3 id='location'>{r.location.subcountry ? r.location.subcountry + ', ' : ''}{r.location.country ? r.location.country : ''} {this.findFlag(r.location.country)} | Runner Since {r.began}</h3>
        <ul id='socials'>
          {r.links.twitch ? <li><a href={twitch}>Twitch</a></li> : ''}
          {r.links.youtube ? <li><a href={youtube}>YouTube</a></li> : ''}
          {r.links.twitter ? <li><a href={twitter}>Twitter</a></li> : ''}
          {r.links.discord ? <li>Discord: @{r.links.discord}</li> : ''}
          {r.links.srcom ? <li><a href={srcom}>speedrun.com</a></li> : ''}
        </ul>
        <p id='bio'>{r.bio}</p>
      </section>
    )
  }
}