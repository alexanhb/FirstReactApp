import React from "react";
import './App.css';
import Header from './Heading';
import Nav from './Nav';

function App() {
  return (
    <div>
      <Header title="Hello World" />
      <nav>
        <Nav />
      </nav>
    </div>
  );
}

export default App;
