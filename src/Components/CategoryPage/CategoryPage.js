import React, {Component} from 'react';
import CATEGORIES from '../../Data/categorydata';
import './categorypage.css';

export default class CategoryPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      category: CATEGORIES.filter(c => c.id === this.props.match.params.id),
      data: {}
    }
  }
  
  populateTable(runs){
    // srcom gives run times in seconds, so i have to convert to hh:mm:ss
    let times = [];
    this.state.data.runs.forEach(e => {
      let h, m, s;
      let time = e.run.times.primary_t;
      h = Math.floor(time / 3600);
      time %= 3600;
      m = Math.floor(time / 60);
      s = (time % 60).toFixed(3);
      
      // adds a zero to necessary parts of time
      // ex: '1:02:03.456' instead of '1:2:3.456'
      if(m < 10){
        m = '0' + m;
      }
      if(s < 10){
        s = '0' + s;
      }

      // removes '.000' from the end of times that have them
      if(s.substring(3) === '000'){
        s = s.substring(0, 2);
      }
      // this if/else gets rid of the hours section if it is 0
      // ex: '34:07.178' instead of '00:34:07.178'
      if(h === 0){
        times.push(m + ':' + s);
      }
      else{
        times.push(h + ':' + m + ':' + s);
      }
    })

    // finally populating the table
    if(!runs){
      runs = 3;
      document.getElementById('lb-table-body').innerHTML = (`
        <tr>
          <th>Rank</th>
          <th>Runner</th>
          <th>Time</th>
        </tr>
      `);
    }
    // some categories do not have enough runs on the leaderboard to satisfy the options on the page, this fixes that
    if(runs > times.length){
      for(let i = 0; i < times.length; i++){
        // some runs on srcom dont have names.international so it breaks
        document.getElementById('lb-table-body').innerHTML += (`
          <tr>
            <td id='rank${i + 1}'>${i + 1}</td>
            <td id='runner${i + 1}'>${this.state.data.players.data[i].id ? this.state.data.players.data[i].names.international : this.state.data.players.data[i].name}</td>
            <td id='time${i + 1}'>${times[i]}</td>
          </tr>
        `)
        // this fixes the rank column in the event of a tie
        if(i > 0 && document.getElementById(`time${i + 1}`).innerHTML === document.getElementById(`time${i}`).innerHTML){
          console.log('Iteration ' + i + 'match')
          document.getElementById(`rank${i + 1}`).innerHTML = i;
        }
      }
    }
    else{
      for(let i = 0; i < runs; i++){
        // some runs on srcom dont have names.international so it breaks
        document.getElementById('lb-table-body').innerHTML += (`
          <tr>
            <td id='rank${i + 1}'>${i + 1}</td>
            <td id='runner${i + 1}'>${this.state.data.players.data[i].id ? this.state.data.players.data[i].names.international : this.state.data.players.data[i].name}</td>
            <td id='time${i + 1}'>${times[i]}</td>
          </tr>
        `)
        // this fixes the rank column in the event of a tie
        if(i > 0 && document.getElementById(`time${i + 1}`).innerHTML === document.getElementById(`time${i}`).innerHTML){
          console.log('Iteration ' + i + 'match')
          document.getElementById(`rank${i + 1}`).innerHTML = i;
        }
      }
    }
  }

  handleChange = () => {
    let value = document.getElementById('run-display-select').value;
    let tbody = document.getElementById('lb-table-body');
    tbody.innerHTML = (`
      <tr>
        <th>Rank</th>
        <th>Runner</th>
        <th>Time</th>
      </tr>
    `);
    console.log(this.state.data.runs);
    this.populateTable(value);
  }

  componentDidMount(){
    const that = this;
    fetch(`https://www.speedrun.com/api/v1/leaderboards/pd0wq31e${this.state.category[0].top15}&embed=players`)
      .then(function(res){
        return res.json();
      })
      .then(function(data){
        that.setState({data: data.data});
        that.populateTable();
      })
  }

  render(){
    return (
      <section className='catpage-container'>
        <h1 id='category-title'>{this.state.category[0].title}</h1>
        <h3 id='about'>About</h3>
        <p id='desc'>{this.state.category[0].desc}</p>
        <div className='category-rules'>
          <h3 id='rules-label'>Rules/Penalties</h3>
          <ul id='rules-list'>
            {this.state.category[0].rules.map(rule =>
              <li key={rule}>{rule}</li>
            )}
          </ul>
          <ul id='penalties-list'>
            {this.state.category[0].penalties.map(penalty =>
              <li key={penalty}>{penalty}</li>
            )}
          </ul>
        </div>
        <div className='leaderboard'>
          <h3 id='lb-label'>Leaderboard</h3>
          <small><a href={`https://speedrun.com/smw#${this.state.category[0].leaderboard}`}>Full Leaderboard</a></small>
          <p>Show Runs:
            {' '}
            <select id='run-display-select' name='run-count' onChange={this.handleChange}>
              <option value={3}>3</option>
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
            </select>
          </p>
          <table id='lb-table'>
            <tbody id='lb-table-body'></tbody>
          </table>
        </div>
        <div className='route'>
          <h3 id='route-label'>Route</h3>
          {/* <button className='button' onClick={() => this.toggleRoute()}>Show/Hide</button> */}
          <ul id='route-list'>
            {this.state.category[0].route.map(level =>
              <li key={level}>{level}</li>
            )}
          </ul>
        </div>
        {/* <div className='strats'>
          <h3 id='strats-label'>Srats</h3>
        </div> */}
      </section>
    )
  }
}