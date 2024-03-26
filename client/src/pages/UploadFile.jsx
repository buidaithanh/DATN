import React, { useState } from "react";
import Header from "../components/Header";
import "../styles/UploadDoc.scss";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import { TiDelete } from "react-icons/ti";
import axios from "axios";
import { server } from "../server";
import { toast } from "react-toastify";
const UploadFile = () => {
  const user = useSelector((state) => state.user.user);
  const [isUpload, setIsUpload] = useState(false);
  const [isPriceDoc, setIsPriceDoc] = useState(false);
  const [defaultPrice, setDefaultPrice] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  //usestate file
  const [nameDoc, setNameDoc] = useState("");
  const [keyWord, setKeyWord] = useState("");
  const [category, setCategory] = useState("");
  const [priceDoc, setPriceDoc] = useState(0);
  const [preview, setPreview] = useState(0);
  const [description, setDescription] = useState("");
  console.log(priceDoc);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    document.getElementById("fileInput").value = null;
  };
  const handlePriceDoc = (e) => {
    setPriceDoc(e.target.value);
    if (e.target.value == "Tự đặt giá") {
      setIsPriceDoc(true);
      setDefaultPrice(false);
    } else if (e.target.value == "Miễn phí") {
      setDefaultPrice(false);
      setIsPriceDoc(false);
      setPriceDoc(0);
    } else {
      setDefaultPrice(true);
      setIsPriceDoc(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", nameDoc);
    formData.append("category", category);
    formData.append("price", priceDoc);
    formData.append("keyWord", keyWord);
    formData.append("preview", preview);
    formData.append("description", description);
    formData.append("doc", selectedFile);
    formData.append("uploadedBy", user._id);

    axios
      .post(`${server}/doc/create-doc`, formData)
      .then((res) => {
        if (res.data.success === true) {
          setNameDoc("");
          setCategory("");
          setKeyWord("");
          setPreview(0);
          setPriceDoc(0);
          setDescription("");
          toast.success(res.data.message);
        }
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };
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
                        <input
                          id="fileInput"
                          type="file"
                          style={{
                            color: "blue",
                            cursor: "pointer",
                          }}
                          onChange={handleFileChange}
                        />
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

                    {selectedFile ? (
                      <>
                        <div className="session-loading">
                          <div className="text">
                            <p>
                              {selectedFile.name}{" "}
                              <TiDelete
                                className="delete__file-name"
                                onClick={handleRemoveFile}
                              />
                            </p>
                          </div>
                          <div className="loading">
                            <div className="line-box">
                              <div className="line"></div>
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <p style={{ textAlign: "start" }}> your-file-here.PDF</p>
                    )}
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
                    <h4
                      style={{
                        margin: "0",
                        width: "300px",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                      }}
                    >
                      Ten file: {selectedFile?.name}
                    </h4>

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
                              value={nameDoc}
                              onChange={(e) => setNameDoc(e.target.value)}
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
                            <select
                              name="danhmucs"
                              id="danhmucs"
                              value={category}
                              onChange={(e) => setCategory(e.target.value)}
                            >
                              <option>-danh muc-</option>
                              <option>CNTT</option>
                              <option>Maketing</option>
                              <option>Kinh tế</option>
                              <option>Kĩ thuật</option>
                              <option>Tài chính</option>
                              <option>Ngoại ngữ</option>
                              <option>Lý luận chính trị</option>
                              <option value="other">Khác</option>
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
                            <input
                              type="text"
                              id="fname"
                              name="firstname"
                              value={keyWord}
                              onChange={(e) => setKeyWord(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-25">
                            <label htmlFor="country">
                              gia ban <span style={{ color: "red" }}>(*)</span>
                            </label>
                          </div>
                          <div className="col-75">
                            <select
                              id="country"
                              name="country"
                              value={priceDoc}
                              onChange={(e) => handlePriceDoc(e)}
                            >
                              <option>Miễn phí</option>
                              <option>2000</option>
                              <option>6000</option>
                              <option>10000</option>
                              <option>15000</option>
                              <option>20000</option>
                              <option>Tự đặt giá</option>
                            </select>
                            {isPriceDoc || defaultPrice ? (
                              <>
                                {isPriceDoc && (
                                  <>
                                    <input
                                      type="text"
                                      style={{
                                        marginTop: "10px",
                                        width: "60px",
                                      }}
                                      onChange={(e) =>
                                        setPriceDoc(e.target.value)
                                      }
                                    />
                                    <span>đ</span>
                                  </>
                                )}
                                <p style={{ margin: "5px 0 5px 10px" }}>
                                  xem trước:
                                </p>
                                <select
                                  id="preview"
                                  name="preview"
                                  value={preview}
                                  onChange={(e) => setPreview(e.target.value)}
                                >
                                  <option>Số trang xem trước</option>
                                  <option>3</option>
                                  <option>6</option>
                                  <option>9</option>
                                  <option>12</option>
                                </select>
                              </>
                            ) : null}
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
                              value={description}
                              placeholder="Write something.."
                              style={{ height: "200px" }}
                              onChange={(e) => setDescription(e.target.value)}
                            ></textarea>
                          </div>
                        </div>
                        <br />
                      </form>
                    </div>
                  </div>
                </div>
                <button className="btn-upload-doc" onClick={handleSubmit}>
                  Upload file
                </button>
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
                  <a href="#" style={{ textDecoration: "none", color: "blue" }}>
                    quy định upload tài liệu{" "}
                  </a>
                  của chúng tôi.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default UploadFile;
