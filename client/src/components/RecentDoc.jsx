import React, { useEffect, useState } from "react";
import { MdOutlineDateRange } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegUser, FaDownload } from "react-icons/fa";
import "../styles/RecentDoc.scss";
// eslint-disable-next-line react/prop-types
const RecentDoc = ({ data }) => {
  const [documents, setDocument] = useState([]);
  const formatDate = (dateTo) => {
    const date = new Date(dateTo);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const formattedDate = `${day < 10 ? "0" + day : day}/${
      month < 10 ? "0" + month : month
    }/${year}`;

    return formattedDate;
  };
  useEffect(() => {
    setDocument(data);
  }, [data]);
  const document = documents.slice(0, 9);
  return (
    <>
      <div className="container">
        <div className="kinhte">kinh te</div>
        <div className="doc-item-rencent">
          {document.map((doc, i) => {
            return (
              <div className="item" key={i}>
                <div className="filename">{doc.name}</div>
                <div className="container-item">
                  <div className="date info">
                    <img src="../../public/svg/Date.svg" alt="" />
                    {formatDate(doc.createdAt)}
                  </div>
                  <div className="views info">
                    <img src="../../public/svg/view.svg" alt="" />
                    {doc.views}
                  </div>
                  <div className="user info">
                    <img src="../../public/svg/user.svg" alt="" />
                    {doc.nameUser}
                  </div>
                  <div className="download info">
                    <img src="../../public/svg/download.svg" alt="" />
                    {doc.downloads}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="underline"></div>
      <div className="container">
        <div className="cntt">CNTT</div>
        <div className="doc-item-rencent">
          {document.map((doc, i) => {
            return (
              <div className="item" key={i}>
                <div className="filename">{doc.name}</div>
                <div className="container-item">
                  <div className="date info">
                    <img src="../../public/svg/Date.svg" alt="" />
                    {formatDate(doc.createdAt)}
                  </div>
                  <div className="views info">
                    <img src="../../public/svg/view.svg" alt="" />
                    {doc.views}
                  </div>
                  <div className="user info">
                    <img src="../../public/svg/user.svg" alt="" />
                    {doc.nameUser}
                  </div>
                  <div className="download info">
                    <img src="../../public/svg/download.svg" alt="" />
                    {doc.downloads}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default RecentDoc;
