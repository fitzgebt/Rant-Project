import React, { Component }  from 'react';
import PostContainer from './containers/PostsContainer'
import './App.css';
import NavBar from './components/NavBar';
import Logo from "./components/Logo"
import Footer from './components/Footer'

export class App extends Component  {
  render() {
    return (
      <div className="container-fluid">
        <div className="row title justify-content-center" style={{ paddingTop: '40px' }}>
          <h1>Rant!</h1>
        </div>
          <NavBar />
          <Logo />
          <PostContainer />
        <hr />

        <fr>
        <Footer />
        </fr>
      </div>
    );
  }
}

export default App;
