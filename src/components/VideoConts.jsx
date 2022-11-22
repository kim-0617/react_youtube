import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { useParams, Link } from 'react-router-dom';
import fetchAPI from '../utils/fetchAPI';
import { Videos, Loader } from '.';
import { FaHeart } from 'react-icons/fa';
// import dummy from '../utils/dummy.json';

const VideoConts = () => {
  const { id } = useParams();
  const [videos, setVideos] = useState(null);
  const [videoDeatil, setVideoDetail] = useState(null);

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchAPI(`videos?part=snippet,statistics&id=${id}`);
      setVideoDetail(data.items[0]);

      const videosData = await fetchAPI(`search?part=snippet,&relatedToVideoId=${id}&type=video`);
      setVideos(videosData?.items);
    };
    fetchResults();
  }, [id]);

  if (!videoDeatil?.snippet) return <Loader />;

  return (
    <>
      <div className="videoConts container">
        <div className="left">
          <div className="play">
            <ReactPlayer className="player" url={`https://www.youtube.com/watch?v=${id}`} controls={true} />
          </div>
          <div className="desc">
            <p className="title">{videoDeatil?.snippet.localized.title}</p>
            <Link to={`/channel/${videoDeatil?.snippet.channelId}`} className="channel">
              {videoDeatil.snippet.channelTitle}
            </Link>
            <div className="info">
              <span className="view">조회수 : {videoDeatil?.statistics.viewCount}</span>
              <span className="like">
                <FaHeart className="heart" />
                {videoDeatil?.statistics.likeCount}
              </span>
            </div>
            <span className="tags">{videoDeatil?.snippet.description}</span>
          </div>
        </div>

        <div className="right">
          <Videos videos={videos} layout="col" />
        </div>
      </div>
    </>
  );
};

export default VideoConts;
