import React from "react";
import './App.css';
import Header from './Heading';
import Nav from './Nav';
import Switch from "./Switch";
import { ThemeProvider, useTheme } from "./ThemeContext";

function App() {
  const { theme } = useTheme();
  return (
    <div className="App"
      style={{
        backgroundColor: theme === "light" ? "white" : "black",
    }}>
      <Switch />
      <Header title="Hello World" />
      <nav>
        <Nav />
      </nav>
    </div>
  );
}

export default App;
