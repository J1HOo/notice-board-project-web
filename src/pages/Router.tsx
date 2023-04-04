import { Route, Routes } from "react-router-dom";
import MainPage from "./home/MainPage";
import NoticeListPage from "./notice/NoticeListPage";
import NoticeAddPage from "./notice/NoticeAddPage";
import NoticeDetailPage from "./notice/NoticeDetailPage";

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/notice/add" element={<NoticeAddPage />} />
        <Route path="/notice/:id" element={<NoticeDetailPage />} />
        <Route path="/notice" element={<NoticeListPage />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </>
  );
};
