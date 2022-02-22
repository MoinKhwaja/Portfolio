import './App.css';
import Splash from './components/splash';
import Header from './components/header'
import Content from './components/Content';
import React from "react"



function App() {
  return (
    <div className="App">
      <Splash/>
      <Header/>
      <Content/>
    </div>
  );
}

export default App;
