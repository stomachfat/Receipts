import React, { Component } from 'react';
import './App.css';

import Login from './login/';
import UploadFile from './uploadFile/UploadFile';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login />
        <UploadFile />
      </div>
    );
  }
}

export default App;
