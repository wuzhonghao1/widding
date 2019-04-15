import React, { Component } from 'react'

import SystemRoute from './component/router';
import Header from './component/common/header';
import Footer from './component/common/footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SystemRoute />
        <Footer />
      </div>
    )
  }
}

export default App;
