import React from 'react';
import Header from './components/Header/index.js';
import './styles.css'
import Main from './pages/main'
import Routes from "./routes"
import PostForm from './components/PostForm/index'

const App = () => (
  <div className="App">
    <Header />
    <Routes />
  </div>
);

export default App;
