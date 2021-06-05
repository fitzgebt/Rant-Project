import React, { Component }  from 'react';
import PostContainer from './containers/PostsContainer'
import './App.css';
import NavBar from './components/NavBar';
import Logo from "./components/Logo"
import Footer from './components/Footer'

export class App extends Component  {
  render() {
    return (
      <div className="container">
        <div className="row title justify-content-center" style={{ paddingTop: '40px' }}>
          <h1>Welcome to Rant!</h1>
        </div>
          <NavBar />
          <Logo />
          <PostContainer />
        <hr />

        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
