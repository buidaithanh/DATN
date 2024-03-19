import React, { useEffect, useState } from "react";
import { MdOutlineDateRange } from "react-icons/md";
import { IoEyeOutline, IoCloudDownloadOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
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
              <img src={doc.image} alt="" className="image-doc" />
              <h4>{doc.title}</h4>
              <div className="dlfex">
                <MdOutlineDateRange className="secondary-color" />{" "}
                <span className="mr">{doc.createdAt}</span>
                <IoEyeOutline className="secondary-color" />{" "}
                <span>{doc.views}</span>
              </div>
              <div className="dlfex">
                <FaRegUser className="secondary-color" />{" "}
                <span className="mr">{doc.uploadBy}</span>
                <IoCloudDownloadOutline className="secondary-color" />{" "}
                <span>{doc.downloads}</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default WeeklyView;
