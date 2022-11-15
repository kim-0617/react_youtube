import React from 'react';
import { SearchBar } from './index';
import { SiYoutube } from 'react-icons/si';

const HeaderCont = () => {
  return (
    <header id="header">
      <h1 className="logo">
        <SiYoutube className="icon" />
        Dev Youtube
      </h1>
      <SearchBar />
    </header>
  );
};

export default HeaderCont;
