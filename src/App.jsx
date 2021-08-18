import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from './views/Home';
import UsersView  from './views/users/UsersView';
import { NavBar } from './components/common/NavBar';
import { HomeBarsList } from './components/bars/BarsList';

class App extends Component {
  
  render(){
    return (
      <>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/users" component={UsersView} />
          <Route exact path="/homebarslist" component={HomeBarsList} />


        </Switch>  
      </>
    )
  }
}

export default App;
