import React, { Component } from 'react'

import SystemRoute from './component/router';
import Header from './component/common/header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SystemRoute />
      </div>
    )
  }
}

export default App;
