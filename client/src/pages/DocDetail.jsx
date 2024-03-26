import axios from "axios";
import React, { useEffect, useState } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import { useParams } from "react-router-dom";
import fileDownload from "js-file-download";
import { server } from "../server";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CommentEditor from "../components/Comments";
import { MdOutlineDateRange } from "react-icons/md";
import { IoCloudDownloadOutline, IoEyeOutline } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";
import { FaSquarePlus } from "react-icons/fa6";
import { MdDownload } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { formatDate } from "../utils/formatDate";
import "../styles/DetailDoc.scss";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const DocDetail = () => {
  const { docId } = useParams();
  const [numPages, setNumPages] = useState();
  const [currentDoc, setCurrentDoc] = useState({});

  const handleDownload = async () => {
    const response = await axios.get(
      `http://localhost:3003/${currentDoc.pdfUrl}`,
      {
        responseType: "blob",
      }
    );
    const file = new Blob([response.data], { type: "application/pdf" });
    const fileURL = URL.createObjectURL(file);
    const link = document.createElement("a");
    link.href = fileURL;
    link.download = `${currentDoc.name}.pdf`;
    link.click();
  };
  useEffect(() => {
    const getDocCurrent = async () => {
      const { data } = await axios.get(`${server}/doc/get-doc/${docId}`);
      setCurrentDoc(data.doc[0]);
    };
    getDocCurrent();
  }, [docId]);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <>
      <Header />
      {currentDoc && (
        <Container>
          {!currentDoc.pdfUrl ? (
            <p>loading........</p>
          ) : (
            <div style={{ width: "880px" }}>
              <p
                style={{ color: "#0A694E", fontSize: "24px", fontWeight: 400 }}
              >
                {currentDoc.name}
              </p>
              <div className="dflex">
                <div className="dflex mr" style={{ marginBottom: " 10px" }}>
                  <div className="mr">
                    <div className="mr secondary-color">
                      <MdOutlineDateRange className="secondary-color mr iconx2" />
                      {formatDate(currentDoc.createdAt)}
                    </div>
                    <div className="secondary-color">
                      <IoEyeOutline className="secondary-color mr iconx2" />
                      {currentDoc.views}
                    </div>
                  </div>
                  <div>
                    <div className="mr secondary-color">
                      <FaRegUser className="secondary-color mr iconx2" />
                      {currentDoc.nameUser}
                    </div>

                    <div className="secondary-color ">
                      {" "}
                      <IoCloudDownloadOutline className="secondary-color mr iconx2" />
                      {currentDoc.downloads}
                    </div>
                  </div>
                </div>
                <div className="dflex">
                  <button
                    className="action__with-doc"
                    style={{ backgroundColor: "#1D58F2", color: "white" }}
                  >
                    <AiOutlineLike
                      className="iconx2"
                      style={{
                        marginRight: "6px",
                      }}
                    />
                    Like
                  </button>
                  <button
                    className="action__with-doc"
                    style={{
                      border: "1px solid #ccc",
                      backgroundColor: "transparent",
                    }}
                  >
                    {" "}
                    <FaSquarePlus
                      className="mr iconx2"
                      style={{
                        color: "#ED553B",

                        marginRight: "6px",
                      }}
                    />
                    Thêm vào bộ sưu tập
                  </button>
                  <button
                    className="action__with-doc"
                    style={{
                      backgroundColor: "#12AB7F",
                      color: "white",
                    }}
                    onClick={() => handleDownload()}
                  >
                    <MdDownload
                      className="mr iconx2"
                      style={{
                        color: "white",

                        marginRight: "6px",
                      }}
                    />
                    download
                  </button>
                  <button
                    className="action__with-doc"
                    style={{
                      backgroundColor: "#FF9900",
                      color: "white",
                      letterSpacing: "1.5px",
                    }}
                    onClick={() => handleDownload()}
                  >
                    {currentDoc.price} d
                  </button>
                </div>
              </div>

              <Document
                file={`http://localhost:3003/${currentDoc.pdfUrl}`}
                onLoadSuccess={onDocumentLoadSuccess}
              >
                {Array.apply(null, Array(numPages))
                  .map((x, i) => i + 1)
                  .map((page, index) => {
                    return (
                      <Page
                        key={index}
                        className="blockchain"
                        pageNumber={page}
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                      >
                        <p className="sub">{`${index + 1}/${numPages}`}</p>
                      </Page>
                    );
                  })}
              </Document>
              <div className="view-more">xem them</div>
              <CommentEditor />
            </div>
          )}
          <div className="interest-doc">
            <div className="header">Có thể bạn quan tâm</div>
            <div className="item">
              <div className="item-details">
                <div className="item-title">Nghiên Cứu Blockchain...</div>
                <div className="dflex">
                  <div className="mr">
                    <div className="item-date">
                      <MdOutlineDateRange className="iconx2 mr" />
                      25/02/2024
                    </div>
                    <div className="item-views">
                      <IoEyeOutline className="iconx2 mr" />
                      354
                    </div>
                  </div>
                  <div>
                    <div className="item-author">
                      <FaRegUser className="iconx2 mr" />
                      VnTaurus
                    </div>
                    <div className="item-likes">
                      <MdDownload className="iconx2 mr" /> 80
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="item-details">
                <div className="item-title">Nghiên Cứu Blockchain...</div>
                <div className="dflex">
                  <div className="mr">
                    <div className="item-date">
                      <MdOutlineDateRange className="iconx2 mr" />
                      25/02/2024
                    </div>
                    <div className="item-views">
                      <IoEyeOutline className="iconx2 mr" />
                      354
                    </div>
                  </div>
                  <div>
                    <div className="item-author">
                      <FaRegUser className="iconx2 mr" />
                      VnTaurus
                    </div>
                    <div className="item-likes">
                      <MdDownload className="iconx2 mr" /> 80
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Các item khác tương tự --> */}
          </div>
        </Container>
      )}
      <Footer />
    </>
  );
};

export default DocDetail;
const Container = styled.div`
  margin-top: 60px;
  width: 90%;
  display: flex;
  margin: 60px auto;
`;
