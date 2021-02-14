import React from 'react';

import { Card, Head, NavBar, Footer, Home, About, Service } from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <Head />
      <NavBar />
      <About />
      <Service />
      <Home />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
