import React, { useEffect, useState } from 'react';
import { Category, Videos } from './index';
import fetchAPI from '../utils/fetchAPI';
import dummy from '../utils/dummy.json';

const MainConts = () => {
  const [selectCategory, setSelectCategory] = useState('webstoryboy');
  const [videos, setVideos] = useState(dummy.items);
  useEffect(() => {
    fetchAPI(`search?part=snippet&q=${selectCategory}`)
      .then((data) => {
        setVideos(data.items);
      })
      .catch((err) => {
        console.dir(err);
      });
  }, [selectCategory]);

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
