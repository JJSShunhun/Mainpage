// App.js

import React from 'react';
import Header from './Header';
import AdditionalLinks from './AdditionalLinks';
import WeeklyPerformance from './WeeklyPerformance'; // 기존 컴포넌트 추가
import PerformanceCommunity from './PerformanceCommunity'; // 새로운 컴포넌트 추가
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <AdditionalLinks />
      <WeeklyPerformance />
      <PerformanceCommunity /> {/* 새로운 컴포넌트 추가 */}
    </div>
  );
}

export default App;

