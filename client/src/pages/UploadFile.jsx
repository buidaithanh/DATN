import React, { useState } from "react";
import Header from "../components/Header";
import "../styles/UploadDoc.scss";
const UploadFile = () => {
  const [isUpload, setIsUpload] = useState(false);
  return (
    <>
      <Header />
      <section className="container">
        <div className="upload-doc">
          <div className="header-upload">
            Nơi chia sẻ tài liệu của Bạn bằng cách Upload files để mọi người có
            thể xem, tải và kết nối cùng Bạn. Chúng tôi sẽ mang đến cho các bạn
            hơn 10 triệu độc giả, thu nhập, danh tiếng và hơn thế nữa
          </div>
          <div className="content-upload">
            {!isUpload ? (
              <div className="content">
                <h3>Upload files để tận hưởng những ưu đãi khác biệt:</h3>
                <div className="offers">
                  <div className="item">
                    <img src="../../public/svg/readers.svg" alt="" />
                    <p>Tiếp cần hàng ngàn độc giả</p>
                  </div>
                  <div className="item">
                    <img src="../../public/svg/present.svg" alt="" />
                    <p>Cơ hội nhận những quà tặng và khuyến mãi</p>
                  </div>
                  <div className="item">
                    <img src="../../public/svg/increase-profit.svg" alt="" />
                    <p>Gia tăng thu nhập từ tài liệu của bạn</p>
                  </div>
                  <div className="item">
                    <img src="../../public/svg/chart.svg" alt="" />
                    <p>Phân tích và báo cáo chỉ số</p>
                  </div>
                </div>
                <div className="btn-upload">
                  <p>Tải tài liệu lên</p>
                  <button onClick={() => setIsUpload(!isUpload)}>
                    Tai len
                  </button>
                </div>
              </div>
            ) : (
              <div className="active-upload">
                <div className="upload">
                  <div className="drag-upload">
                    <h3>Upload</h3>
                    <section className="section-upload">
                      <img src="/svg/upload.svg" alt="" />
                      <h4>
                        Keo tha file hoac{" "}
                        <span style={{ color: "blue", cursor: "pointer" }}>
                          Browse
                        </span>
                      </h4>
                      <p className="text-color-primary">
                        Ho tro dinh dang PDF, Word
                      </p>
                    </section>
                    <h4
                      style={{ textAlign: "start" }}
                      className="text-color-primary"
                    >
                      Uploaded File
                    </h4>

                    <p style={{ textAlign: "start" }}> your-file-here.PDF</p>
                    <img src="/svg/camera.svg" alt="" />
                    <button
                      style={{
                        backgroundColor: "#12AB7F",
                        color: "white",
                        border: "none",
                        padding: "10px 20px",
                        display: "block",
                        margin: "auto",
                      }}
                    >
                      Tai anh dai dien
                    </button>
                  </div>
                  <div className="set-info-doc">
                    <p
                      style={{
                        backgroundColor: "#59EFB2",
                        padding: "5px 20px",
                        color: "white",
                        width: "100%",
                        borderTopRightRadius: "5px",
                        borderTopLeftRadius: "5px",
                      }}
                    >
                      Xac nhan thong tin
                    </p>
                    <h4 style={{ margin: "0" }}>Ten file: abc.pdf</h4>

                    <div className="container-info">
                      <form action="">
                        <div className="row">
                          <div className="col-25">
                            <label htmlFor="fname">
                              Tieu de <span style={{ color: "red" }}>(*)</span>
                            </label>
                          </div>
                          <div className="col-75">
                            <input
                              type="text"
                              id="fname"
                              name="firstname"
                              placeholder="enter your title here"
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-25">
                            <label htmlFor="lname">
                              {" "}
                              Danh muc <span style={{ color: "red" }}>(*)</span>
                            </label>
                          </div>
                          <div className="col-75">
                            <select name="cars" id="cars">
                              <option value="danhmuc">-cntt-</option>
                              <option value="saab">Saab</option>
                              <option value="mercedes">Mercedes</option>
                              <option value="audi">Audi</option>
                            </select>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-25">
                            <label htmlFor="fname">
                              tu khoa <span style={{ color: "red" }}>(*)</span>
                            </label>
                          </div>
                          <div className="col-75">
                            <input type="text" id="fname" name="firstname" />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-25">
                            <label htmlFor="country">
                              gia ban <span style={{ color: "red" }}>(*)</span>
                            </label>
                          </div>
                          <div className="col-75">
                            <select id="country" name="country">
                              <option value="australia">Australia</option>
                              <option value="canada">Canada</option>
                              <option value="usa">USA</option>
                            </select>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-25">
                            <label htmlFor="subject">
                              {" "}
                              Mo ta <span style={{ color: "red" }}>(*)</span>
                            </label>
                          </div>
                          <div className="col-75">
                            <textarea
                              id="subject"
                              name="subject"
                              placeholder="Write something.."
                              style={{ height: "200px" }}
                            ></textarea>
                          </div>
                        </div>
                        <br />
                      </form>
                    </div>
                  </div>
                </div>
                <div
                  className="btn-upload-doc"
                  style={{
                    marginTop: "50px",
                    textAlign: "center",
                    margin: "auto",
                    padding: "10px 50px",
                    width: "180px",
                    backgroundColor: "#8749FF",
                    color: "white",
                    borderRadius: "5px",
                  }}
                >
                  Upload file
                </div>
              </div>
            )}
            <div className="upload-guide">
              <img
                className="vertical-align"
                src="../../public/svg/guide.svg"
                alt=""
              />{" "}
              <span className="header-guide">huong dan upload</span>
              <ul>
                <li>Hỗ trợ định dạng tài liệu: word, PDF.</li>
                <li>Để tránh lỗi font vui lòng chuyển sang font unicode.</li>
                <li>Dung lượng tối đa cho phép mỗi tài liệu là 20MB.</li>
              </ul>
              <img
                className="vertical-align"
                src="../../public/svg/guide.svg"
                alt=""
              />{" "}
              <span className="header-guide">Quy định upload</span>
              <ul>
                <li>
                  Lưu ý: không upload tài liệu có bản quyền mà không có sự đồng
                  ý của tác giả.
                </li>
                <li>Không upload tài liệu có nội dung phản động.</li>
                <li>Không upload tài liệu vi phạm tuần phong mĩ tục.</li>
                <li>
                  Không upload tài liệu vi tuyệt mật liên quan đến quốc gia.
                </li>
                <li>
                  Vui lòng tham khảo chi tiết{" "}
                  <a href="#" style={{ textDecoration: "none" }}>
                    quy định upload tài liệu{" "}
                  </a>
                  của chúng tôi.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UploadFile;
