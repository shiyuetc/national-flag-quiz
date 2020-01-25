import React from 'react';
import './App.css';
import Quiz from './components/Quiz';
import { AreaGroups } from './data/AreaGroups';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="Content">
        <Quiz areaGroups={AreaGroups}/>
      </div>
    </div>
  );
}

export default App;
