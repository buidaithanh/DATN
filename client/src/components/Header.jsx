import React from "react";
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
  FaAngleDown,
} from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { MdWorkspacePremium } from "react-icons/md";
// eslint-disable-next-line react/prop-types
const Header = ({ currentUser }) => {
  console.log("user", currentUser);
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
        <img className="logo" src="/png/DTdoc.png" alt="" />
        <a href="">
          <CiMenuFries className="iconx2" style={{ color: " #12ab7f" }} />
        </a>
        <div className="search-docs">
          <input type="text" placeholder="Tim kiem tai lieu..." />
          <FaSearch className="ab" />
        </div>
        <a href="" className="upgrade dflex">
          <h3 className="mr">UPGRAGE</h3>
          <img src="../../public/svg/upgrade.svg" alt="" className="iconx2" />
        </a>
        <button className="upload">
          <FaCloudUploadAlt className="mr iconx2" />
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to="/upload-file"
          >
            UPLOAD
          </Link>
        </button>
        <p>Hi {currentUser?.name}</p>
        {currentUser ? (
          <img
            style={{ width: "40px", height: "40px", borderRadius: "50px" }}
            src={`http://localhost:3003/${currentUser?.avatar}`}
            alt=""
          />
        ) : (
          <img src="/svg/avatar.svg" alt="" />
        )}

        <a href="">
          <FaAngleDown />
        </a>
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
