import React from 'react';
import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';
import NavBar from './components/Navbar';



const App = () => {
  return (
    <div className="App-wrapper">
          <Header/>
          <NavBar/>
          <Profile/>

    </div>
  );
}

export default App;
