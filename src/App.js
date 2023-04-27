import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import { Component } from 'react';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreetings from './components/UserGreetings';
import NameList from './components/NameList';

class App extends Component {
  render() {
    return (
      <div>
        {/* <Greet />
        <Welcome name= "Sankar"/>
        <Hello name= "Sankar" />
        <Message /> 
        <Counter /> 
        <FunctionClick /> 
        <ClassClick /> 
        <EventBind />
        <ParentComponent />
        <UserGreetings /> */}
        <NameList />
      </div>
    )
  }
}

export default App;
