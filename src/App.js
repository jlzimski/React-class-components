import logo from './logo.svg';
import './App.css';
import { Films } from "./films"
import { Component } from 'react';


class App extends Component{
  render() {
    return (
      <div className="App">
        <Films favNumber={42} fname={"Justin"} />
      </div>
    );
  }
}


export default App;
