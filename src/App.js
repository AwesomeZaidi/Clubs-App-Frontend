import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Dashboard from './Components/Dashboard/Dashboard';
// import List from "./List/List";
// import Form from "./Form/Form";
// import Post from "./Posts/Posts";

class App extends Component {
  render() {
    return (
        <div>
          <Navbar />
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/dashboard' component={Dashboard} />
          {/* <h2>Articles Example</h2>
          <List />
          <h2>Add a new article</h2>
          <Form />
          <h2>API posts</h2>
          <Post /> */}
        </div>
    );
  }
}

export default App;
