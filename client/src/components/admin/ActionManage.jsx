import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { FiUsers } from "react-icons/fi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { GrOverview } from "react-icons/gr";
import { MdOutlinePayment } from "react-icons/md";
import { LuBarChart3 } from "react-icons/lu";
import { BiMessageRoundedDots } from "react-icons/bi";
import { Link } from "react-router-dom";
const ActionManage = () => {
  const [isActive, setIsActive] = useState("user");

  console.log(isActive);

  return (
    <Container>
      <span
        style={{
          color: "#12AB7F",
          font: " italic 600 32px / normal Inter, sans-serif",
        }}
      >
        DT
      </span>
      <span
        style={{
          color: "white",
          font: " italic 600 32px / normal Inter, sans-serif",
        }}
      >
        doc
      </span>
      <ul>
        <li
          onClick={() => setIsActive("user")}
          className={`dflex item-action ${isActive == "user" ? "active" : ""}`}
        >
          <FiUsers className="icon-action__manage" />
          <Link
            to={"/admin/manage-user"}
            style={{ textDecoration: "none", color: "#a6a6a6" }}
          >
            User{" "}
          </Link>
        </li>
        <li
          onClick={() => setIsActive("document")}
          className={`dflex item-action ${
            isActive == "document" ? "active" : ""
          }`}
        >
          <IoDocumentTextOutline className="icon-action__manage" />
          <Link
            to={"/admin/manage-docs"}
            style={{ textDecoration: "none", color: "#a6a6a6" }}
          >
            Documents{" "}
          </Link>
        </li>

        <li className="dflex item-action">
          <GrOverview className="icon-action__manage" />
          Overview
        </li>
        <li className="dflex item-action">
          <MdOutlinePayment className="icon-action__manage" />
          <Link
            to={"/admin/manage-payment"}
            style={{ textDecoration: "none", color: "#a6a6a6" }}
          >
            Payment
          </Link>
        </li>

        <li className="dflex item-action">
          <LuBarChart3 className="icon-action__manage" />
          Chart analytic
        </li>
        <li
          onClick={() => setIsActive("chat")}
          className={`dflex item-action ${isActive == "chat" ? "active" : ""}`}
        >
          <BiMessageRoundedDots className="icon-action__manage" />
          <Link
            to={"/admin/manage-chat"}
            style={{ textDecoration: "none", color: "#a6a6a6" }}
          >
            Chat{" "}
          </Link>
        </li>
      </ul>
    </Container>
  );
};

export default ActionManage;
const Container = styled.div`
  // width: 264px;
  padding: 35px 30px 80px 26px;
  position: fixed;
  height: 100vh;
  box-sizing: border-box;
  box-shadow: -4px -4px 4px rgba(255, 255, 255, 0.1),
    4px 4px 4px rgba(0, 0, 0, 0.1);
  background-color: #242745;
  font-size: 20px;
  letter-spacing: 2px;
  color: #b7b7b7;
  margin-left: -110px;
  .active {
    cursor: pointer;
    background: linear-gradient(45deg, #6256de, #542fa2);
    border-radius: 5px;
    color: #fff;
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px,
      rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px,
      rgba(0, 0, 0, 0.07) 0px 16px 16px;
    a {
      color: white;
    }
  }
  ul {
    margin: 34px 0px 0px -40px;
    width: 100%;
    li {
      font-weight: 600;
      padding: 10px 0 10px 20px;
      margin-bottom: 10px;
      font-size: 18px;
      &:hover {
        cursor: pointer;
        background: linear-gradient(45deg, #6256de, #542fa2);
        border-radius: 5px;
        color: #fff;
        box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px,
          rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px,
          rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;
        a {
          color: white;
        }
      }
      a {
        color: #a6a6a6;
        text-decoration: none;
      }
      .icon-action__manage {
        verical-align: middle;
        margin: auto 10px auto 0;
      }
    }
  }
`;
