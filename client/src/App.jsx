import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Page from './components/Page'

function App() {
  return (
    <div style={{margin: '-10px'}}>
      <BrowserRouter>
        <Route path="/" component={NavBar} />
        <Route exact path="/" component={Home} />
        <Route exact path='/:name' component={Page} />
      </BrowserRouter>
    </div>
  );
}

export default App;
