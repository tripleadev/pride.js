import React from 'react';
import { Hello, PrideProvider } from './pride.js';

const App = () => (
  <PrideProvider theme="dark">
    <Hello name="adam" />
  </PrideProvider>
);

export default App;
