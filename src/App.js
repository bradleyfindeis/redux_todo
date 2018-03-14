import React from 'react';
import './App.css';
import StickyForm from './components/StickyForm';
import StickyList from './components/StickyList';
import Footer from './components/Footer';

const App = () => (
  <div className="App">
    <StickyForm />
    <StickyList />
    <Footer />
  </div>
)

export default App;
