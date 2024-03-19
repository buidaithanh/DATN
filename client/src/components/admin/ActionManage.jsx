import React from "react";
import { styled } from "styled-components";
import { FiUsers } from "react-icons/fi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { GrOverview } from "react-icons/gr";
import { MdOutlinePayment } from "react-icons/md";
import { LuBarChart3 } from "react-icons/lu";
import { Link } from "react-router-dom";
const ActionManage = () => {
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
        <li className="dflex item-action">
          <FiUsers className="icon-action__manage" />
          <Link className="" to={"/admin/manage-docs"}>
            User
          </Link>
        </li>
        <li className="dflex item-action">
          <IoDocumentTextOutline className="icon-action__manage" />
          Documents
        </li>
        <li className="dflex item-action">
          <GrOverview className="icon-action__manage" />
          Overview
        </li>
        <li className="dflex item-action">
          <MdOutlinePayment className="icon-action__manage" />
          Payment
        </li>
        <li className="dflex item-action">
          <LuBarChart3 className="icon-action__manage" />
          Chart analytic
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
      }
      .icon-action__manage {
        verical-align: middle;
        margin: auto 10px auto 0;
      }
    }
  }
`;
