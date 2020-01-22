import React from 'react';
import './App.css';
import Quiz from './components/Quiz';
import { Countries } from './data/Countries';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="Content">
        <h2 className="Title">国旗クイズ</h2>
        <Quiz countries={Countries}/>
      </div>
    </div>
  );
}

export default App;
