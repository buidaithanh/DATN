import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { FaAnglesDown } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <Container>
      <form className="search-input">
        <input type="text" placeholder="Search" className="input-search" />
        <button type="submit" className="btn-search">
          <FaSearch />
        </button>
      </form>
      <div className="conversations">
        <div className="item">
          <div style={{ position: "relative" }}>
            <img
              className="img-message"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "999px",
                marginRight: "10px",
              }}
              src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg"
              alt=""
            />
            <span className="online-indicator"></span>
          </div>
          <div style={{ marginRight: "30px" }}>
            <h4 style={{ margin: 0, color: "#7A7A7A" }}>JsonDoe</h4>
            <p style={{ margin: 0, color: "#ADADAD" }}>Hello, how are you?</p>
          </div>
          <p style={{ color: "#7A7A7A" }}>2:36</p>
        </div>
        <div className="item">
          <div style={{ position: "relative" }}>
            <img
              className="img-message"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "999px",
                marginRight: "10px",
              }}
              src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg"
              alt=""
            />
            <span className="online-indicator"></span>
          </div>
          <div style={{ marginRight: "30px" }}>
            <h4 style={{ margin: 0, color: "#7A7A7A" }}>JsonDoe</h4>
            <p style={{ margin: 0, color: "#ADADAD" }}>Hello, how are you?</p>
          </div>
          <p style={{ color: "#7A7A7A" }}>2:36</p>
        </div>
      </div>
      <FaAnglesDown
        style={{
          display: "block",
          margin: "auto",
          color: "#676A7F",
          cursor: "pointer",
        }}
      />
    </Container>
  );
};

export default Sidebar;
const Container = styled.div`
  background-color: #0f1125;
  //   padding: 26px;
  margin: 0;
  .search-input {
    padding: 26px;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    .input-search {
      border: 1px solid #818181;
      border-radius: 9999px;
      padding: 0.8rem 0.75rem;
      background-color: transparent;
      caret-color: white;
    }
    .btn-search {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      transition: all 0.2s ease-in-out;
      border-radius: 9999px;
      padding: 14px;
      background-color: white;
      color: black;
      border: none;
      &:hover {
        cursor: pointer;
      }
    }
  }

  .conversations {
    display: flex;
    overflow: auto;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    flex-direction: column;
    .item {
      padding-top: 0.5rem;
      justify-content: center;
      display: flex;
      margin: 0.3rem 0;
      &:hover {
        cursor: pointer;
        background-color: #3d3f4e;
      }
      .online-indicator {
        position: absolute;
        top: -3px;
        right: 8px;
        width: 10px;
        height: 10px;
        border: 3px solid white;
        border-radius: 50%;
        background-color: #00ff19;
      }
    }
  }
`;
