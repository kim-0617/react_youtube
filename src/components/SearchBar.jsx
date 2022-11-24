import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const onHandleSubmit = (e) => {
    if (e.keyCode === 13) {
      handleSearch();
    }
  };

  const handleSearch = () => {
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
    }
  };

  return (
    <>
      <div className="search" onKeyDown={onHandleSubmit}>
        <label htmlFor="searchInput" className="glass">
          <FiSearch />
        </label>
        <input
          type="text"
          id="searchInput"
          className="input__search"
          placeholder="개발자 유튜버를 검색하세요!"
          value={searchTerm}
          title="검색"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </>
  );
};

export default SearchBar;
