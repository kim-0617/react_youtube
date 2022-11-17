import React, { useCallback } from 'react';
import { categories } from '../utils/content';

const Category = ({ selectCategory, setSelectCategory }) => {
  const onClickBtn = useCallback(
    (e) => {
      // 텍스트 바꿔주기
      setSelectCategory(e.currentTarget.textContent);

      // active 작업
      Array.from(e.currentTarget.parentElement.children).forEach((bs) => {
        bs.classList.remove('active');
      });
      e.currentTarget.classList.add('active');
    },
    [setSelectCategory],
  );

  return (
    <nav>
      {categories.map((category) => {
        return (
          <button
            // style={{
            //   backgroundColor: category.name === selectCategory ? 'rgb(241, 121, 221)' : 'transparent',
            // }}
            key={category.name}
            onClick={onClickBtn}
          >
            <span className="cIcon">{category.icon}</span>
            <span className="cName">{category.name}</span>
          </button>
        );
      })}
    </nav>
  );
};

export default Category;
