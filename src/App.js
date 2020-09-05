import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';

function App() {
  return (
    <div className="App">
      <FunctionClick />
      <ClassClick />
      {/*
      <Counter />
      <Greet name="furkan" heroName="Batman" />

      
      <Message />
      <Greet name="furkan" heroName="Batman" > 
      <p>This is children props 1</p>
      </Greet>
      <Greet name="fatih" heroName="Deadpol" >
        <p>This is children props 2 </p>
      </Greet>
       <Hello/>
      <Welcome/> */}
    </div>
  );
}

export default App;
