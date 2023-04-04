import React from "react";
import NoticeItem from "../components/NoticeItem";
import { Link } from "react-router-dom";

function NoticeListPage() {
  return (
    <div className="place-items-center grid">
      <div className=" flex w-full max-w-4xl flex-col">
        <h3 className="mt-14 font-bold"> 글 목록</h3>
        <Link to={"/notice/add"}>
          <button>새로운 글 작성</button>
        </Link>
        <div className="rounded-md border mt-10">
          <NoticeItem />
        </div>
      </div>
    </div>
  );
}

export default NoticeListPage;
