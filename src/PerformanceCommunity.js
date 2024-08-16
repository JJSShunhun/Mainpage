// PerformanceCommunity.js

import React from 'react';
import './PerformanceCommunity.css';

function PerformanceCommunity() {
  return (
    <div className="PerformanceCommunity">
      <div className="PerformanceBoard">
        <div className="BoardHeader">
          <h2>공연 후기</h2>
          <a href="#performance">게시판 이동</a>
        </div>
        {/* 공연 후기 게시판 내용 */}
      </div>
      <div className="PromotionBoard">
        <div className="BoardHeader">
          <h2>공연 홍보</h2>
          <a href="#promotion">게시판 이동</a>
        </div>
        {/* 공연 홍보 게시판 내용 */}
      </div>
    </div>
  );
}

export default PerformanceCommunity;
