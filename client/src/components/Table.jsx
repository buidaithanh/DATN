import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { formatDate } from "../utils/formatDate";

const Table = ({ header, data, editDoc, deleteDoc, viewDoc }) => {
  const dataDoc = data?.docs;
  return (
    <div className="table-info__docs">
      <div className="table">
        <div className="table-header">
          {header.map((h, i) => {
            return (
              <div className={`header__item${i + 1}`} key={i}>
                <p id="name" className="filter__link" href="">
                  {h}
                </p>
              </div>
            );
          })}

          <div className="header__item5">
            <p id="total" className="filter__link filter__link--number" href="">
              Action
            </p>
          </div>
        </div>
        <div className="table-content">
          {dataDoc == undefined ? (
            dataDoc.map((doc, i) => {
              return (
                <div className="table-row" key={i}>
                  <div className="table-data1">{doc.name}</div>
                  <div className="table-data2">{formatDate(doc.createdAt)}</div>
                  <div className="table-data3">{doc.status}</div>
                  <div className="table-data4">{doc.price}</div>
                  <div className="table-data5">
                    <FaRegEdit
                      style={{
                        fontSize: "20px",
                        verticalAlign: "middle",
                        marginRight: "30px",
                      }}
                    />
                    <MdDeleteOutline
                      style={{
                        fontSize: "20px",
                        verticalAlign: "middle",
                      }}
                    />
                  </div>
                </div>
              );
            })
          ) : (
            <p style={{ textAlign: "center" }}>
              Ban chua upload tai lieu nao ca
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Table;
