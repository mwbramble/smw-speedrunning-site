import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import LEVELS from '../../Data/leveldata';

export default class Levels extends Component{
  render(){
    return (
      <section className='levels-container'>
        <h1>Levels</h1>
        <h3>World 1</h3>
        <ul className='world-list' id='world-1'>
          {LEVELS.map(l => {
            if(l.world === 1){
              return (
                <li key={l.id}>
                  <Link to={`/levels/${l.id}`}>
                    {l.name}
                  </Link>
                </li>
              )
            }
            return null;
          })}
        </ul>
        <h3>World 2</h3>
        <ul className='world-list' id='world-1'>
          {LEVELS.map(l => {
            if(l.world === 2){
              return (
                <li key={l.id}>
                  <Link to={`/levels/${l.id}`}>
                    {l.name}
                  </Link>
                </li>
              )
            }
            return null;
          })}
        </ul>
        <h3>World 3</h3>
        <ul className='world-list' id='world-1'>
          {LEVELS.map(l => {
            if(l.world === 3){
              return (
                <li key={l.id}>
                  <Link to={`/levels/${l.id}`}>
                    {l.name}
                  </Link>
                </li>
              )
            }
            return null;
          })}
        </ul>
        <h3>World 4</h3>
        <ul className='world-list' id='world-1'>
          {LEVELS.map(l => {
            if(l.world === 4){
              return (
                <li key={l.id}>
                  <Link to={`/levels/${l.id}`}>
                    {l.name}
                  </Link>
                </li>
              )
            }
            return null;
          })}
        </ul>
        <h3>World 5</h3>
        <ul className='world-list' id='world-1'>
          {LEVELS.map(l => {
            if(l.world === 5){
              return (
                <li key={l.id}>
                  <Link to={`/levels/${l.id}`}>
                    {l.name}
                  </Link>
                </li>
              )
            }
            return null;
          })}
        </ul>
        <h3>World 6</h3>
        <ul className='world-list' id='world-1'>
          {LEVELS.map(l => {
            if(l.world === 6){
              return (
                <li key={l.id}>
                  <Link to={`/levels/${l.id}`}>
                    {l.name}
                  </Link>
                </li>
              )
            }
            return null;
          })}
        </ul>
        <h3>World 7</h3>
        <ul className='world-list' id='world-1'>
          {LEVELS.map(l => {
            if(l.world === 7){
              return (
                <li key={l.id}>
                  <Link to={`/levels/${l.id}`}>
                    {l.name}
                  </Link>
                </li>
              )
            }
            return null;
          })}
        </ul>
        <h3>Star World</h3>
        <ul className='world-list' id='world-1'>
          {LEVELS.map(l => {
            if(l.world === 8){
              return (
                <li key={l.id}>
                  <Link to={`/levels/${l.id}`}>
                    {l.name}
                  </Link>
                </li>
              )
            }
            return null;
          })}
        </ul>
        <h3>Special World</h3>
        <ul className='world-list' id='world-1'>
          {LEVELS.map(l => {
            if(l.world === 9){
              return (
                <li key={l.id}>
                  <Link to={`/levels/${l.id}`}>
                    {l.name}
                  </Link>
                </li>
              )
            }
            return null;
          })}
        </ul>
      </section>
    )
  }
}