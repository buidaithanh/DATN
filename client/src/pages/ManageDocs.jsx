import React from "react";
import Header from "../components/Header"; //import header từ component

const ManageDocs = () => {
  return (
    <>
      {/* sử dụng header ở đây ,k cần code lại */}
      <Header />
      {/* code tiếp nội dung tiếp theo */}
      <h1>quản lý file</h1>
    </>
  );
};

export default ManageDocs;
