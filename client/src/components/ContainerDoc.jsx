import React, { useEffect, useState } from "react";
import { MdOutlineDateRange } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegUser, FaDownload } from "react-icons/fa";
import "../styles/ContainerDoc.scss";
// eslint-disable-next-line react/prop-types
const WeeklyView = ({ data }) => {
  const [document, setDocument] = useState([]);
  useEffect(() => {
    setDocument(data);
  }, [data]);
  return (
    <>
      <div className="container-doc">
        {document.map((doc, index) => {
          return (
            <div key={index} className="item">
              <img src={doc.image} alt="" />
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
          );
        })}
      </div>
    </>
  );
};

export default WeeklyView;