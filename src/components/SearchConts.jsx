import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchAPI from '../utils/fetchAPI';
import Videos from './Videos';

const SearchConts = () => {
  const [videos, setVideos] = useState(null);
  const { searchKeyword } = useParams();

  useEffect(() => {
    fetchAPI(`search?part=snippet&q=${searchKeyword}`)
      .then((data) => setVideos(data.items))
      .catch((err) => console.log(err));
  }, [searchKeyword]);

  return (
    <>
      <div className="result">{searchKeyword}의 검색결과</div>
      <div>
        <Videos videos={videos} search={true} />
      </div>
    </>
  );
};

export default SearchConts;
