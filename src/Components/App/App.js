import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Nav from '../Nav/Nav';
import Home from '../Home/Home';
import Categories from '../Categories/Categories';
import CategoryPage from '../CategoryPage/CategoryPage';
import Glitches from '../Glitches/Glitches';
import Glossary from '../Glossary/Glossary';
import Resources from '../Resources/Resources';
import NotFound from '../NotFound/NotFound';
import Footer from '../Footer/Footer';

export default class App extends Component{
  render(){
    return (
      <main role='main'>
        <Nav />
        <div className='content'>
          <Switch>
            <Route
              exact path='/'
              component={Home}
            />
            <Route
              exact path='/categories'
              component={Categories}
            />
            <Route
              exact path='/categories/:id'
              component={CategoryPage}
            />
            <Route
              exact path='/glitches'
              component={Glitches}
            />
            <Route
              exact path='/glossary'
              component={Glossary}
            />
            <Route
              exact path='/resources'
              component={Resources}
            />
            <Route
              component={NotFound}
            />
          </Switch>
        </div>
        <Footer />
      </main>
    )
  }
}