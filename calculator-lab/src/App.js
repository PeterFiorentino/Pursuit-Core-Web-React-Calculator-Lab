import React from 'react';
import Buttons from './Components/Buttons'
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
        displayValue: '0',
        previousValue: null,
        operation: null,
        waitingForNewValue: false
    }
  }



  render() {
    return (
      <div className="App">
        <Buttons />
      </div>
    );
  }
}

export default App;
