import React, { useEffect, useState } from "react";
import "../styles/Header.scss";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaSearch,
  FaCloudUploadAlt,
} from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import axios from "axios";
import { server } from "../server";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const Header = () => {
  const currentUser = useSelector((state) => state.user.user);

  const [menuActive, setMenuActive] = useState(false);

  const handleMiniPhotoClick = () => {
    setMenuActive(!menuActive);
  };
  const handleLogout = async () => {
    axios.get(`${server}/user/logout`, { withCredentials: true });
  };
  return (
    <header>
      {/* <img src={currentUser.avatar} alt="" /> */}
      <div className="top">
        <a href="">
          <FaPhoneAlt />
          <small> +84 824318812</small>
        </a>
        <div className="contact">
          <a href="">
            <FaFacebookF />
          </a>
          <a href="">
            <FaInstagram />
          </a>
          <a href="">
            <FaLinkedinIn />
          </a>
          <a href="">
            <FaTwitter />
          </a>
        </div>
      </div>
      <div className="middle">
        <Link to="/">
          {" "}
          <img
            style={{ objectFit: "contain", width: 80 }}
            className="logo"
            src="/png/DTdoc.png"
            alt=""
          />
        </Link>
        <a href="">
          <CiMenuFries className="iconx2" style={{ color: " #12ab7f" }} />
        </a>
        <div className="search-docs">
          <input type="text" placeholder="Tim kiem tai lieu..." />
          <FaSearch
            className="ab"
            style={{ color: "#888888", cursor: "pointer" }}
          />
        </div>
        <a href="" className="upgrade dflex">
          <h3 className="mr">UPGRAGE</h3>
          <img src="../../public/svg/upgrade.svg" alt="" className="iconx2" />
        </a>
        <button className="upload">
          <Link
            style={{
              color: "white",
              textDecoration: "none",
              alignSelf: "center",
            }}
            to="/upload-file"
          >
            <FaCloudUploadAlt className="mr iconx2" />
            UPLOAD
          </Link>
        </button>
        <p style={{ textTransform: "uppercase", color: "#12AB7F" }}>
          <span style={{ color: "#FF9900" }}>HI,</span> {currentUser?.name}
        </p>
        <div className="user-menu-wrap">
          <a
            className="mini-photo-wrapper"
            href="#"
            onClick={handleMiniPhotoClick}
          >
            {currentUser ? (
              <img
                style={{ width: "40px", height: "40px", borderRadius: "50px" }}
                src={`http://localhost:3003/${currentUser?.avatar}`}
                alt=""
              />
            ) : (
              <img src="/svg/avatar.svg" alt="" />
            )}
          </a>
          <div className={`menu-container ${menuActive ? "active" : ""}`}>
            <ul className="user-menu">
              <li className="user-menu__item">
                <a className="user-menu-link" href="#">
                  <img
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1604623/trophy.png"
                    alt="trophy_icon"
                    width={20}
                    height={20}
                  />
                  <div>Thông tin cá nhân</div>
                </a>
              </li>
              <li className="user-menu__item">
                <a className="user-menu-link" href="#">
                  <img
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1604623/team.png"
                    alt="team_icon"
                    width={20}
                    height={20}
                  />
                  <div>Quản lý tài chính</div>
                </a>
              </li>
              <li className="user-menu__item">
                <Link to="/manage-docs" className="user-menu-link" href="#">
                  <img
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1604623/book.png"
                    alt="team_icon"
                    width={20}
                    height={20}
                  />
                  <div>Quản lý tài liệu</div>
                </Link>
              </li>
              <li className="user-menu__item">
                <Link
                  className="user-menu-link"
                  to="/login"
                  style={{ color: "#F44336" }}
                  onClick={handleLogout}
                >
                  Đăng xuất
                </Link>
              </li>
              <li className="user-menu__item">
                <a className="user-menu-link" href="#">
                  Cài đặt
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* dropdown-menu  */}
      </div>
      <hr style={{ width: "100%", textAlign: "left", marginLeft: 0 }} />
      <ul className="bottom">
        <li>
          <a href="">TRANG CHU</a>
        </li>
        <li>
          <a href="">VE CHUNG TOI</a>
        </li>
        <li>
          <a href="">TAT CA TAI LIEU</a>
        </li>
        <li>
          <a href="">LIEN HE</a>
        </li>
        <li>
          <a href="">NANG CAP</a>{" "}
        </li>
      </ul>
    </header>
  );
};

export default Header;
