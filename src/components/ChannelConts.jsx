import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Videos, Loader } from './';
import fetchAPI from '../utils/fetchAPI';

const ChannelConts = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchAPI(`channels?part=snippet&id=${id}`);
      setChannelDetail(data?.items[0]);

      const videosData = await fetchAPI(`search?channelId=${id}&part=snippet&order=date`);
      setVideos(videosData?.items);
    };
    fetchResults();
  }, [id]);

  if (!channelDetail?.snippet) return <Loader />;

  return (
    <section id="channelConts">
      <div
        className="channel__header"
        style={{
          background: `url(${channelDetail?.brandingSettings?.image?.bannerExternalUrl})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <img src={channelDetail.snippet.thumbnails.medium.url} alt="채널 이미지" />
      </div>
      <div className="channel__info">
        <h3>{channelDetail.snippet.title}</h3>
        <div className="info">
          <span className="sNum">구독자 : {channelDetail?.statistics?.subscriberCount}</span>
          <span className="vNum">비디오 수 : {channelDetail?.statistics?.videoCount}</span>
          <span className="vcNum">조회 수 : {channelDetail?.statistics?.viewCount}</span>
        </div>
      </div>
      <div className="channel__videos">
        <Videos videos={videos} channel={true}></Videos>
      </div>
    </section>
  );
};

export default ChannelConts;
