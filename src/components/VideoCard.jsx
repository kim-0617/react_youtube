import React from 'react';
import { Link } from 'react-router-dom';
import Loader from './Loader';

const VideoCard = ({ video, index }) => {
  if (video?.length === 0 || !video.snippet.thumbnails.medium.url) return <Loader />;

  if (video.id.kind.includes('playlist')) return null;
  if (index === 0) {
    return (
      <div className="box first">
        <Link to={`/channel/${video.snippet.channelId}`}>
          <img src={video.snippet?.thumbnails?.medium.url} alt={video.snippet?.title} />
        </Link>
        <Link to={`/channel/${video.snippet.channelId}`}>
          <span className="title">{video.snippet.title}</span>
        </Link>
      </div>
    );
  } else {
    return (
      <div className="box">
        <Link to={`video/${video.id.videoId}`}>
          <img src={video.snippet?.thumbnails?.medium.url} alt={video.snippet?.title} />
        </Link>
        <Link to={`video/${video.id.videoId}`}>
          <span className="title">{video.snippet.title}</span>
        </Link>
        {/* <Link to={`/channel/${video.snippet.channelId}`}>
        <span className="channelName">{video.snippet.channelTitle}</span>
      </Link> */}
      </div>
    );
  }
};

export default VideoCard;
