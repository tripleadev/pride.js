import React from 'react';
import './App.css';

import { Hello, PrideProvider, Button } from './lib/pride';

const App = () => (
  <PrideProvider theme="light">
    <div className="wrapper">
      <div className="landing">
        <Hello name="adam">pride.js</Hello>
      </div>
      <div className="components">
        <h1>Components</h1>
        <hr />
        <h2>Button</h2>
        <Button>I'm Outlined</Button>
        <Button mode="contained">I'm Contained</Button>
        <Button
          color="blue"
          onClick={() => (window.location.href = 'https://www.youtube.com/watch?v=BinWA0EenDY')}>
          I'm blue
        </Button>
        <Button color="gray.3">6 shades of Gray</Button>
      </div>
    </div>
  </PrideProvider>
);

export default App;
