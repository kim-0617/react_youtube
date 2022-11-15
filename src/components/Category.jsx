import React, { useCallback } from 'react';
import { categories } from '../utils/content';

const Category = ({ selectCategory, setSelectCategory }) => {
  // const onClickBtn = useCallback((e) => {
  //   console.log(e.target.tagName);
  //   if (e.target.tagName === 'SPAN') {

  //   }
  // }, []);

  return (
    <nav>
      {categories.map((category) => {
        return (
          <button
            key={category.name}
            onClick={() => {
              setSelectCategory(category.name);
            }}
          >
            <span>{category.icon}</span>
            <span>{category.name}</span>
          </button>
        );
      })}
    </nav>
  );
};

export default Category;
