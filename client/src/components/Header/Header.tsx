import React from 'react';
import './Header.css';

const Header: React.FC<{ setLanguage: Function }> = ({ setLanguage }) => {
  const setES = () => {
    setLanguage('es');
  };
  const setEN = () => {
    setLanguage('en');
  };
  return (
    <div className="header-wrapper">
      <h1 className="title">WordList</h1>
      <div className="languages">
        <span onClick={setES}>ES</span>
        <span onClick={setEN}>EN</span>
      </div>
    </div>
  );
};

export default Header;
