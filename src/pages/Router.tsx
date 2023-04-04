import { Route, Routes } from "react-router-dom";
import MainPage from "./home/MainPage";

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </>
  );
};
