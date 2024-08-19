import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import MainPage from "./page/MainPage";
import PostWritePage from "./page/PostWritePage";
import PostViewPage from "./page/PostViewPage";

const MainTitleText = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

const MiniBlogApp = () => {
  return (
    <BrowserRouter>
      <MainTitleText>나의 미니 블로그</MainTitleText>
      <Routes>
        {/* index 와 path='/' 는 같다 */}
        <Route index element={<MainPage />} />
        <Route path="post-write" element={<PostWritePage />} />
        <Route path="post/:postId" element={<PostViewPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MiniBlogApp;
