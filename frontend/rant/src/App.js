import React, { Component }  from 'react';
import PostForm from './components/PostForm'
import PostContainer from './containers/PostsContainer'
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';


export class App extends Component  {
  render() {
    return (
      <div className="container-fluid">
        <div className="row title justify-content-center" style={{ paddingTop: '12px' }}>
          <h1>Rant!</h1>
        </div>
          <NavBar />
          {/* <Home /> */}
          {/* <PostForm /> */}
          <PostContainer />
        <hr />
      </div>
    );
  }
}

export default App;
