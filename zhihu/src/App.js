import React, { Component } from 'react';
import { Switch, Route ,Redirect} from "react-router-dom"
import Home from "./components/pages/home/home"
import Detail from "./components/pages/detail/detail"

import './App.css';
import "./assets/css/reset.css"
import "./assets/js/rem"  

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/home" component={Home}></Route>
          <Route path="/detail/:id" component={Detail}></Route>
          <Redirect to="home"></Redirect>
        </Switch>
      </div>
    );
  }
}

export default App;
