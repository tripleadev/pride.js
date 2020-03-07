import React from 'react';
import { Hello, PrideProvider } from './pride.js';
import './App.css';

const App = () => (
  <PrideProvider theme="dark">
    <div className="wrapper">
      <div className="landing">
        <Hello name="adam">pride.js</Hello>
      </div>
    </div>
  </PrideProvider>
);

export default App;
