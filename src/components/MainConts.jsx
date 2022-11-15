import React, { useEffect, useState } from 'react';
import { Category, Videos } from './index';
import fetchAPI from '../utils/fetchAPI';

const MainConts = () => {
  const [selectCategory, setSelectCategory] = useState('');
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    fetchAPI(`search?part=snippet&q=webstoryboy`)
      .then((data) => {
        setVideos(data.items);
      })
      .catch((err) => {
        console.dir(err);
      });
  }, []);

  return (
    <main id="main">
      <aside id="aside">
        <Category selectCategory={selectCategory} setSelectCategory={setSelectCategory} />
      </aside>
      {/* aside */}

      <section id="contents">
        <h2>
          <em>{selectCategory}</em> 유튜버
        </h2>
        <Videos videos={videos} />
      </section>
      {/* section */}
    </main>
  );
};

export default MainConts;
