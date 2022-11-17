import React from 'react';

import { VideoCard, Loader } from './index';

const Videos = ({ videos }) => {
  if (videos?.length === 0 || !Array.isArray(videos) || videos === null) return <Loader />;
  return (
    <article className="videos__inner">
      {videos.map((video, index) => {
        return (
          <React.Fragment key={index}>
            <VideoCard video={video} index={index} />
          </React.Fragment>
        );
      })}
    </article>
  );
};

export default Videos;
