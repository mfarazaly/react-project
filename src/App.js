import React from 'react';
import './App.css';
import Header from './templates/Header';
import Message from './templates/Message';
import Greet from './templates/Greet';
import Footer from './templates/Footer';
import Parent from './templates/Parent';

function App() {
  return (
    <div className="App">
  
      <Header />


      <Greet name="Bruce">
        He is a Batman
      </Greet>
      <Greet name="Clark" />
      <Greet name="Diana" />


      <Message />

      <Parent />

      

      <Footer />

    </div>
  );
}

export default App;
