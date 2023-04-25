import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import { Component } from 'react';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';

class App extends Component {
  render() {
    return (
      <div>
        {/* <Greet />
        <Welcome name= "Sankar"/>
        <Hello name= "Sankar" />
        <Message /> */}
        <Counter />
      </div>
    )
  }
}

export default App;
