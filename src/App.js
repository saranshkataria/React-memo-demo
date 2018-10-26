import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WisdomGeekComponent from './Greeting';
import ReactMemoComponent from './MemoComponent';

class App extends Component {
  state = {
    updateCount: 0
  };
  componentDidMount() {
    setInterval(() => {
      this.setState({ updateCount: this.state.updateCount + 1 });
    }, 1000);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>I was updated {this.state.updateCount} times </p>
          <WisdomGeekComponent isNotMemo="true" />
          <ReactMemoComponent isMemo="true" />
        </header>
      </div>
    );
  }
}

export default App;
