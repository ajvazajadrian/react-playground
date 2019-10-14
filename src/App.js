import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.jsx';
import Main from './components/Main';
import IconContainer from './components/IconContainer.jsx';




function App() {


  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <div className="App-Main">  
      <IconContainer />      
      </div>
    </div>
  );
}





export default App;


