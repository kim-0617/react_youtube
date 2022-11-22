import React from 'react';

import { VideoCard, Loader } from './index';

const Videos = ({ videos, layout, channel }) => {
  if (videos?.length === 0 || !Array.isArray(videos) || videos === null) return <Loader />;
  return (
    <article className={`videos__inner ${layout}`}>
      {videos.map((video, index) => {
        return (
          <React.Fragment key={index}>
            <VideoCard video={video} index={index} layout={layout} channel={channel} />
          </React.Fragment>
        );
      })}
    </article>
  );
};

export default Videos;
