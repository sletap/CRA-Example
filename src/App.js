import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form.js'

function App() {
  let question= "Who has the worst spice tolerance?";
  let greeting= "That's weak";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Form 
          question={question}
          greeting={greeting}
        />
      </header>
    </div>
  );
}

export default App;
