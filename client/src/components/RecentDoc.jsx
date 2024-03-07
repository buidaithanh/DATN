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
  const document = documents.slice(0, 8);
  console.log(document);
  return (
    <>
      {/* <h1 className="primary-color">Tai lieu moi dang</h1>
      {document.map((doc, index) => {
        return (
          <div className="recent-doc" key={index}>
            <h2>kinh te</h2>
            <div className="items-doc">
              <div className="sub-item">
                <h4>{doc.title}</h4>
                <div className="dlfex">
                  <MdOutlineDateRange />{" "}
                  <span className="mr">{doc.createdAt}</span>
                  <IoEyeOutline /> <span>{doc.views}</span>
                </div>
                <div className="dlfex">
                  <FaRegUser /> <span className="mr">{doc.uploadBy}</span>
                  <FaDownload /> <span>{doc.downloads}</span>
                </div>
              </div>
            </div>
          </div>
        );
      })} */}

      <div className="container">
        <div className="kinhte">kinh te</div>
        <div className="item1">
          <div className="tenfile">cntt nghien cuu khoa hoc</div>
          <div className="date">52/1/2024</div>
          <div className="views">45</div>
          <div className="user">daithanh</div>
          <div className="download">45</div>
        </div>
        <div className="item2">
          <div className="tenfile">cntt nghien cuu khoa hoc</div>
          <div className="date">52/1/2024</div>
          <div className="views">45</div>
          <div className="user">daithanh</div>
          <div className="download">45</div>
        </div>
        <div className="item3">
          <div className="tenfile">cntt nghien cuu khoa hoc</div>
          <div className="date">52/1/2024</div>
          <div className="views">45</div>
          <div className="user">daithanh</div>
          <div className="download">45</div>
        </div>
        <div className="item4">
          <div className="tenfile">cntt nghien cuu khoa hoc</div>
          <div className="date">52/1/2024</div>
          <div className="views">45</div>
          <div className="user">daithanh</div>
          <div className="download">45</div>
        </div>
        <div className="item5">
          <div className="tenfile">cntt nghien cuu khoa hoc</div>
          <div className="date">52/1/2024</div>
          <div className="views">45</div>
          <div className="user">daithanh</div>
          <div className="download">45</div>
        </div>
        <div className="item6"></div>
        <div className="item7"></div>
        <div className="item8"></div>
        <div className="item9"></div>
      </div>
    </>
  );
};

export default RecentDoc;
