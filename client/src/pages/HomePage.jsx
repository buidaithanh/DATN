import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import ContainerDoc from "../components/ContainerDoc";
import "../styles/HomePage.scss";
// import { documents } from "../../data/index";
import { FaArrowRight } from "react-icons/fa";
import RecentDoc from "../components/RecentDoc";
import { useSelector } from "react-redux";
import Chat from "../components/Chat";
import Footer from "../components/Footer";
import Store from "../redux/store";
import { loadUser } from "../redux/actions/user";
import axios from "axios";
import { server } from "../server";
const HomePage = () => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const [documentsTopViews, setDocumentsTopViews] = useState([]);
  const [documents, setDocuments] = useState([]);
  useEffect(() => {
    const getTopViewedDocuments = async () => {
      await axios.get(`${server}/doc/top-viewed-documents`).then((res) => {
        setDocumentsTopViews(res.data.getTopViewedDocuments);
      });
    };
    getTopViewedDocuments();
  }, []);
  console.log(documentsTopViews);
  useEffect(() => {
    Store.dispatch(loadUser());
  }, []);
  return (
    <div>
      <Header />
      <div className="slider">
        <div className="content">
          <h2>
            Nền Tảng Cung Cấp <br />
            Da Dạng Tài Liệu
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />{" "}
            Officia ipsa accusantium inventore nostrum ex natus molestiae
            <br /> nam assumenda dolores aliquid nobis eum, nisi sint quod
            voluptates!
            <br /> Quas repellendus aut iure?
          </p>
          <a href="" className="btn-primary">
            XEM THÊM
          </a>
        </div>
        <img src="/svg/slider.svg" alt="" />
      </div>
      <div className="explore-docs">
        <div className="dflex">
          <hr
            style={{
              width: "30px",
              textAlign: "left",
              marginLeft: 0,
              marginRight: 10,
              backgroundColor: "#ED553B",
            }}
          />
          <span className="primary-color">Document</span>
        </div>
        <div className="dflex dflex-between mb-40">
          <h3>Khám phá tài liệu</h3>
          <p>
            Bạn có thể khám phá nhiều loại tài liệu ở nhiều lĩnh vực khác nhau
          </p>
        </div>
        <div className="items-category">
          <div className="item">
            <img src="/png/docs-explore1.png" alt="" />
            <h3>cao đẳng - đại học</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur ducimus perspiciatis necessitatibus, odio quis
              mollitia, tempora laborum et, blanditiis natus doloribus facere.
              Libero harum aliquid, quasi perferendis quibusdam voluptas
              doloribus.
            </p>
          </div>
          <div className="item">
            <img src="/png/docs-explore2.png" alt="" />

            <h3>cao đẳng - đại học</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur ducimus perspiciatis necessitatibus, odio quis
              mollitia, tempora laborum et, blanditiis natus doloribus facere.
              Libero harum aliquid, quasi perferendis quibusdam voluptas
              doloribus.
            </p>
          </div>
          <div className="item">
            <img src="/png/docs-explore3.png" alt="" />

            <h3>cao đẳng - đại học</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur ducimus perspiciatis necessitatibus, odio quis
              mollitia, tempora laborum et, blanditiis natus doloribus facere.
              Libero harum aliquid, quasi perferendis quibusdam voluptas
              doloribus.
            </p>
          </div>
        </div>
        <a className="btn-primary mt-40">xem them</a>
      </div>
      <div className="weekly-review">
        <div className="separator" style={{ alignItems: "center" }}>
          <hr
            style={{
              width: "26%",
              height: "2px",
              textAlign: "left",
              marginLeft: 0,
              marginRight: 10,
              backgroundColor: "#ED553B",
            }}
          />
          <h1>Tài Liệu Xem Nhiều Mỗi Tuần</h1>
          <hr
            style={{
              height: "2px",
              width: "26%",
              textAlign: "left",
              marginLeft: 0,
              marginRight: 10,
              backgroundColor: "#ED553B",
            }}
          />
        </div>
        <ContainerDoc data={documentsTopViews} />
        <div style={{ textAlign: "right" }}>
          <a
            style={{ textDecoration: "none", color: "#ed553b" }}
            href=""
            className="mr"
          >
            Xem Thêm
          </a>
          <FaArrowRight style={{ color: "#ed553b" }} />
        </div>
      </div>
      <div className="featured-document">
        <div className="separator" style={{ alignItems: "center" }}>
          <hr
            style={{
              width: "26%",
              height: "2px",
              textAlign: "left",
              marginLeft: 0,
              marginRight: 10,
              backgroundColor: "#ED553B",
            }}
          />
          <h1>Tài Liệu Nổi Bật</h1>
          <hr
            style={{
              height: "2px",
              width: "26%",

              textAlign: "left",
              marginLeft: 0,
              marginRight: 10,
              backgroundColor: "#ED553B",
            }}
          />
        </div>
        <ContainerDoc data={documentsTopViews} />
        <div style={{ textAlign: "right" }}>
          <a
            style={{ textDecoration: "none", color: "#ed553b" }}
            href=""
            className="mr"
          >
            Xem Thêm
          </a>
          <FaArrowRight style={{ color: "#ed553b" }} />
        </div>
      </div>

      <div className="recent-doc">
        <div className="separator" style={{ alignItems: "center" }}>
          <hr
            style={{
              width: "26%",
              height: "2px",
              textAlign: "left",
              marginLeft: 0,
              marginRight: 10,
              backgroundColor: "#ED553B",
            }}
          />
          <h1>Tài Liệu Mới Đăng</h1>
          <hr
            style={{
              height: "2px",
              width: "26%",

              textAlign: "left",
              marginLeft: 0,
              marginRight: 10,
              backgroundColor: "#ED553B",
            }}
          />
        </div>
        <RecentDoc data={documentsTopViews} />
      </div>
      <Chat />
      <Footer />
    </div>
  );
};

export default HomePage;
