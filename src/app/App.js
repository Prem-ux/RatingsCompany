import React from 'react';
import { RatingsProvider } from '../context/RatingsContext';
// import Dashboard from './views/Dashboard/Dashboard';

function App() {
  return (
    <RatingsProvider>
      {/* <Dashboard /> */}
    </RatingsProvider>
  );
}   

export default App;