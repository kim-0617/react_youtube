import React from 'react';
import { Link } from 'react-router-dom';
import Loader from './Loader';

const VideoCard = ({ video, index, layout, channel, search }) => {
  if (video?.length === 0 || !video.snippet.thumbnails.medium.url) return <Loader />;

  if (video.id.kind.includes('playlist')) return null;
  if (index === 0 && !layout && !channel && !search) {
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
  } else if (video.id.kind === 'youtube#channel') return null;
  else {
    return (
      <div className={`box ${channel ? 'channel' : ''} ${search ? 'search' : ''}`}>
        {layout ? (
          <>
            <Link to={`/video/${video.id.videoId}`}>
              <img src={video.snippet?.thumbnails?.medium.url} alt={video.snippet?.title} />
            </Link>
            <Link to={`/video/${video.id.videoId}`}>
              <span className="title">{video.snippet.title}</span>
            </Link>
          </>
        ) : (
          <>
            <Link to={`/video/${video.id.videoId}`}>
              <img src={video.snippet?.thumbnails?.medium.url} alt={video.snippet?.title} />
            </Link>
            <Link to={`/video/${video.id.videoId}`}>
              <span className="title">{video.snippet.title}</span>
            </Link>
          </>
        )}
        {/* <Link to={`/channel/${video.snippet.channelId}`}>
        <span className="channelName">{video.snippet.channelTitle}</span>
      </Link> */}
      </div>
    );
  }
};

export default VideoCard;
