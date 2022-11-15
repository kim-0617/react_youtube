import React from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchBar = () => {
  return (
    <>
      <div className="search">
        <label htmlFor="searchInput" className="glass">
          <FiSearch />
        </label>
        <input type="text" id="searchInput" className="input__search" placeholder="개발자 유튜버를 검색하세요!" />
      </div>
    </>
  );
};

export default SearchBar;
