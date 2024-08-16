import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="top-nav">
        <div className="logo">주4일제</div>
        <div className="auth-links">
          <a href="/login" className="auth-link">로그인</a>
          <a href="/signup" className="auth-link">회원가입</a>
        </div>
      </div>
     
    </header>
  );
};

export default Header;
