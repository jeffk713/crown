import React from 'react';
import './App.css';
import HomePage from './components/page/homepage/HomePage.component'
import Header from './components/Header/Header.component';

function App() {
  return (
    <div className='App'> 
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
