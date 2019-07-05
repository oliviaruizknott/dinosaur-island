import React from 'react';
import './App.scss';

import BoardSection from './BoardSection';

function App() {
  return (
    <div className="App">
      <div className="sidebar">This will be the Messages Bar.</div>
      <BoardSection />
      <div className="sidebar">This will be the Stats Bar.</div>
    </div>
  );
}

export default App;
