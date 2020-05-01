import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Nav from '../Nav/Nav';
import Home from '../Home/Home';
import Categories from '../Categories/Categories';
import CategoryPage from '../CategoryPage/CategoryPage';
import Contact from '../Contact/Contact';
import Glitches from '../Unused/Glitches/Glitches';
import Glossary from '../Glossary/Glossary';
import GDQHistory from '../GDQHistory/GDQHistory';
import Levels from '../Levels/Levels';
import LevelPage from '../LevelPage/LevelPage';
import Resources from '../Resources/Resources';
import Runners from '../Runners/Runners';
import RunnerPage from '../RunnerPage/RunnerPage';
import Tutorials from '../Tutorials/Tutorials';
import NotFound from '../NotFound/NotFound';
import Footer from '../Footer/Footer';
import '../../colorvariables.css';

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
              exact path='/contact'
              component={Contact}
            />
            <Route
              exact path='/gamesdonequick'
              component={GDQHistory}
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
              exact path='/levels'
              component={Levels}
            />
            <Route
              exact path='/levels/:id'
              component={LevelPage}
            />
            <Route
              exact path='/resources'
              component={Resources}
            />
            <Route
              exact path='/runners'
              component={Runners}
            />
            <Route
              exact path='/runners/:id'
              component={RunnerPage}
            />
            <Route
              exact path='/tutorials'
              component={Tutorials}
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