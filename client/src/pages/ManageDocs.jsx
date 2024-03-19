import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { LuUser } from "react-icons/lu";
import { documents } from "../../data/index";
import {
  IoDocumentTextOutline,
  IoSettingsOutline,
  IoLogOutOutline,
  IoNotificationsOutline,
} from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { BsCloudDownloadFill } from "react-icons/bs";
import { RiUserFollowFill } from "react-icons/ri";
import "../styles/ManageDocs.scss";
import Table from "../components/Table";
import axios from "axios";
import { server } from "../server";
import { useSelector } from "react-redux";
const ManageDocs = () => {
  const userId = useSelector((state) => state.user.user?._id);
  const [typeFilterDoc, setTypeFilerDoc] = useState("upload");
  const [statusFilter, setStatusFilter] = useState("all");
  const [menuActive, setMenuActive] = useState("user");
  const [dataDoc, setDataDoc] = useState(null);
  const header = ["name", "uploadDate", "status", "fee"];
  useEffect(() => {
    const getDataDoc = async () => {
      const { data } = await axios.get(`${server}/doc/get-all-docs/${userId}`);
      setDataDoc(data);
    };
    getDataDoc();
  }, [userId]);

  return (
    <>
      <Header />
      <section className="manage-docs">
        <section className="action-manage">
          <div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/78d597839852cf370a80f9db1969d241a4a1b2b6ab76bfe1d36d634bbadb67ac?apiKey=a8e99f3721b24ee5acfd958ae906ebbf&"
              alt=""
            />
            <p>
              Cập nhật avatar{" "}
              <img src="../../public/svg/action-manage/edit.svg" alt="" />
            </p>
          </div>
          <div
            className={`action-item  ${
              menuActive === "user" ? "action-active" : ""
            } dflex`}
            onClick={() => setMenuActive("user")}
          >
            <LuUser
              style={{ margin: "auto 0", fontSize: "20px" }}
              className="vertical-align action-icon"
            />
            <p className="secondary-color ml">Quản lý tài khoản</p>
          </div>
          <div
            className={`action-item  ${
              menuActive === "document" ? "action-active" : ""
            } dflex`}
            onClick={() => setMenuActive("document")}
          >
            <IoDocumentTextOutline
              style={{ margin: "auto 0", fontSize: "20px" }}
              className="vertical-align secondary-color action-icon"
            />
            <p className="secondary-color ml">Quản lý tài liệu</p>
          </div>
          <div
            className={`action-item  ${
              menuActive === "setting" ? "action-active" : ""
            } dflex`}
            onClick={() => setMenuActive("setting")}
          >
            <IoSettingsOutline
              style={{ margin: "auto 0", fontSize: "20px" }}
              className="vertical-align secondary-color action-icon"
            />
            <p className="secondary-color ml">Setting</p>
          </div>
          <div
            className={`action-item  ${
              menuActive === "notify" ? "action-active" : ""
            } dflex`}
            onClick={() => setMenuActive("notify")}
          >
            <IoNotificationsOutline
              style={{ margin: "auto 0", fontSize: "20px" }}
              className="vertical-align secondary-color action-icon"
            />
            <p className="secondary-color ml">Thông báo</p>
          </div>
          <div
            className={`action-item  ${
              menuActive === "logout" ? "action-active" : ""
            } dflex`}
            onClick={() => setMenuActive("logout")}
          >
            <IoLogOutOutline
              style={{ margin: "auto 0", fontSize: "20px" }}
              className="vertical-align secondary-color action-icon"
            />
            <p className="secondary-color ml">Logout</p>
          </div>
        </section>
        <section className="info-docs">
          <section className="section-analytics">
            <div className="item">
              <IoDocumentTextOutline
                className="analytics-icon"
                style={{ backgroundColor: "#FFF2E9", color: "#FF6A00" }}
              />
              <div>
                <p style={{ margin: 0 }} className="secondary-color">
                  Tài liệu
                </p>
                <h4 style={{ margin: 0 }}>3</h4>
              </div>
            </div>

            <div className="item">
              <BsCloudDownloadFill
                className="analytics-icon"
                style={{ backgroundColor: "#EDE8FF", color: "#551FFF" }}
              />
              <div>
                <p style={{ margin: 0 }} className="secondary-color">
                  download
                </p>
                <h4 style={{ margin: 0 }}>3</h4>
              </div>
            </div>
            <div className="item">
              <RiUserFollowFill
                className="analytics-icon"
                style={{ backgroundColor: "#EAF9FF", color: "#00B7FE" }}
              />
              <div>
                <p style={{ margin: 0 }} className="secondary-color">
                  Luot follow
                </p>
                <h4 style={{ margin: 0 }}>3</h4>
              </div>
            </div>
            <div className="item">
              <RiUserFollowFill
                className="analytics-icon"
                style={{ backgroundColor: "#FFEBEF", color: "#FD2254" }}
              />
              <div>
                <p style={{ margin: 0 }} className="secondary-color">
                  Tài liệu
                </p>
                <h4 style={{ margin: 0 }}>3</h4>
              </div>
            </div>
          </section>
          <div className="table-data__section">
            <div className="filter-docs">
              <button
                className={` ${typeFilterDoc === "upload" ? "active" : ""}`}
                onClick={() => setTypeFilerDoc("upload")}
              >
                {" "}
                Tài liệu upload
              </button>
              <button
                className={` ${typeFilterDoc === "favorite" ? "active" : ""}`}
                onClick={() => setTypeFilerDoc("favorite")}
              >
                {" "}
                Tài liệu yêu thích
              </button>
              <button
                className={` ${typeFilterDoc === "download" ? "active" : ""}`}
                onClick={() => setTypeFilerDoc("download")}
              >
                {" "}
                Tài liệu download
              </button>
              <button
                className={` ${typeFilterDoc === "colection" ? "active" : ""}`}
                onClick={() => setTypeFilerDoc("colection")}
              >
                Bộ sưu tập
              </button>
            </div>

            <p className="sub-filter">
              Filter:{" "}
              <span
                className={`${statusFilter === "all" ? "selected" : ""}`}
                onClick={() => setStatusFilter("all")}
              >
                All |
              </span>{" "}
              <span
                className={`${statusFilter === "approved" ? "selected" : ""}`}
                onClick={() => setStatusFilter("approved")}
              >
                đã duyệt |
              </span>{" "}
              <span
                className={`${statusFilter === "processing" ? "selected" : ""}`}
                onClick={() => setStatusFilter("processing")}
              >
                chờ duyệt |
              </span>{" "}
              <span
                className={`${statusFilter === "rejected" ? "selected" : ""}`}
                onClick={() => setStatusFilter("rejected")}
              >
                bị từ chối
              </span>
            </p>

            {dataDoc && <Table header={header} data={dataDoc} />}
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default ManageDocs;
