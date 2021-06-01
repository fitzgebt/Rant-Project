import React, { Component }  from 'react';
import PostForm from './components/PostForm'
import PostContainer from './containers/PostsContainer'
import './App.css';

export class App extends Component  {
  render() {
    return (
      <div className="container-fluid">
        <div className="row title justify-content-center" style={{ paddingTop: '12px' }}>
          <h1>Test App Maker</h1>
        </div>
          <PostForm />
          {/* <PostContainer /> */}
        <hr />
      </div>
    );
  }
}

export default App;
