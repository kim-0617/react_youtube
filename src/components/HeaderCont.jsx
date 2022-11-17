import React from 'react';
import { SearchBar } from './index';
import { SiYoutube } from 'react-icons/si';
import { Link } from 'react-router-dom';

const HeaderCont = () => {
  return (
    <header id="header">
      <h1 className="logo">
        <Link to="/">
          <SiYoutube className="icon" />
          Dev Youtube
        </Link>
      </h1>
      <SearchBar />
    </header>
  );
};

export default HeaderCont;
