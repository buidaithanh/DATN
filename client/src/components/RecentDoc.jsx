import React, { useEffect, useState } from "react";
import { MdOutlineDateRange } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegUser, FaDownload } from "react-icons/fa";
import "../styles/RecentDoc.scss";
// eslint-disable-next-line react/prop-types
const RecentDoc = ({ data }) => {
  const [documents, setDocument] = useState([]);
  useEffect(() => {
    setDocument(data);
  }, [data]);
  const document = documents.slice(0, 9);
  console.log("document", document);
  return (
    <>
      <div className="container">
        <div className="kinhte">kinh te</div>
        <div className="doc-item-rencent">
          {document.map((doc, i) => {
            return (
              <>
                <div className="item" key={i}>
                  <div className="filename">{doc.title}</div>
                  <div className="container-item">
                    <div className="date info">
                      <img src="../../public/svg/Date.svg" alt="" />
                      {doc.createdAt}
                    </div>
                    <div className="views info">
                      <img src="../../public/svg/view.svg" alt="" />
                      {doc.views}
                    </div>
                    <div className="user info">
                      <img src="../../public/svg/user.svg" alt="" />
                      {doc.uploadBy}
                    </div>
                    <div className="download info">
                      <img src="../../public/svg/download.svg" alt="" />
                      {doc.downloads}
                    </div>
                  </div>
                </div>
              </>
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
              <>
                <div className="item">
                  <div className="filename">cntt nghien cuu khoa hoc</div>
                  <div className="container-item">
                    <div className="date info">
                      <img src="../../public/svg/Date.svg" alt="" />
                      52/1/2024
                    </div>
                    <div className="views info">
                      <img src="../../public/svg/view.svg" alt="" />
                      45
                    </div>
                    <div className="user info">
                      <img src="../../public/svg/user.svg" alt="" />
                      daithanh
                    </div>
                    <div className="download info">
                      <img src="../../public/svg/download.svg" alt="" />
                      45
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default RecentDoc;
