import React, {Component} from 'react';
import CATEGORIES from '../../Data/categories';
import {Link} from 'react-router-dom';
import './categories.css';

export default class Categories extends Component{
  render(){
    return (
      <section className='categories-container'>
        <h1>Categories</h1>
        <ul className='categories-list'>
          {CATEGORIES.map(c =>
            <li key={c.id}>
              <Link to={`/categories/${c.id}`}>
                {c.title}
              </Link>
            </li>
          )}
        </ul>
      </section>
    )
  }
}