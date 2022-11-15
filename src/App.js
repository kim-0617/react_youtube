import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { MainConts, VideoConts, ChannelConts, SearchConts, HeaderCont } from './components';

function App() {
  return (
    <BrowserRouter>
      <HeaderCont />
      <Routes>
        <Route path="/" element={<MainConts />}></Route>
        <Route path="/video/:id" element={<VideoConts />}></Route>
        <Route path="/channel/:id" element={<ChannelConts />}></Route>
        <Route path="/search/:searchKeyword" element={<SearchConts />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
