import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import fetchAPI from '../utils/fetchAPI';
import dummy from '../utils/dummy.json';

const VideoConts = () => {
  const { id } = useParams();
  const [videos, setVideos] = useState(null);
  const [videoDeatil, setVideoDetail] = useState(null);

  useEffect(() => {
    fetchAPI(`videos?part=snippet,statistics&id=${id}`).then((data) => {
      setVideoDetail(data.items[0]);
    });

    fetchAPI(`search?part=snippet,&relatedToVideoId=${id}&type=video`).then((data) => {
      setVideos(data.items);
    });
  }, [id]);

  // const {
  //   snippet: { title, channelId, channelTitle },
  //   statistics: { viewCount, likeCount },
  // } = videoDeatil;

  return (
    <>
      <div className="videoConts container">
        <div className="left">
          <div className="play">
            <ReactPlayer className="player" url={`https://www.youtube.com/watch?v=${id}`} controls={true} />
          </div>
          <div className="desc"></div>
        </div>
        <div className="right"></div>
      </div>
    </>
  );
};

export default VideoConts;
