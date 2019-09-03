import React, { Component } from 'react';
import { Switch, Route ,Redirect} from "react-router-dom"
import Home from "./components/pages/home/home"
import Detail from "./components/pages/detail/detail"
import Comment from "./components/pages/comment/comment"
import Collect from "./components/pages/collect/collect"
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
           <Route path="/comment/:id" component={Comment}></Route>
           <Route path="/collect" component={Collect}></Route>
          <Redirect to="home"></Redirect>
        </Switch>
      </div>
    );
  }
}

export default App;
