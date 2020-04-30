// TODO: Add place for videos.

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import GDQINDEX from '../../Data/gdqdata';
import './gdqhistory.css';

export default class GDQ extends Component {
  render(){
    return (
      <section className='gdq-container'>
        <h1>GDQ Runs</h1>
        <p>Below is a list of every GDQ event that has showcased vanilla SMW and each of the runs done. Note that some of the category names may have changed since they were showcased.</p>
        <ul className='gdqList'>
          {GDQINDEX.map(gdq =>
            <li key={gdq.id}>
              <b>{gdq.name}</b>
              <ul id='gdq'>
                {gdq.runs.map(r =>
                  <li key={r.catId}>
                    <Link to={`/categories/${r.catId}`}>{r.category}</Link> in {r.times} by <i>{r.runners}</i>.
                  </li>  
                )}
              </ul>
            </li>)}
        </ul>
      </section>
    )
  }
}