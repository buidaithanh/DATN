import "../styles/Chat.scss";
import { FaRegSmile } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
import Message from "../components/chat/Message";
import { useState } from "react";
const ChatContainer = () => {
  const [isChatVisible, setChatVisible] = useState(false);
  return (
    <section className="help-section">
      {isChatVisible ? (
        <div id="chat-container">
          <div className="header-chat">
            <div
              style={{
                marginTop: "-10px",
                fontWeight: "600",
              }}
            >
              <img
                style={{
                  width: "30px",
                  borderRadius: "300px",
                  verticalAlign: "middle",
                }}
                src="https://tse4.mm.bing.net/th?id=OIP.Me_AqujgECGQ-2cLUY2QhgHaHa&pid=Api&P=0&h=180"
                alt=""
              />{" "}
              Admin
            </div>
            <IoCloseOutline
              style={{
                cursor: "pointer",
                fontSize: "18px",
                marginTop: "-6px",
              }}
              onClick={() => setChatVisible(!isChatVisible)}
            />
          </div>

          <div className="content-messages">
            <Message />
          </div>
          <div className="input-message">
            <FaRegSmile />
            <input
              type="text"
              placeholder="Typing a message"
              style={{
                backgroundColor: "transparent",
                flexGrow: 1,
                border: "none",
              }}
            />
            <RiSendPlaneFill />
          </div>
        </div>
      ) : (
        <div
          className="help-offer"
          onClick={() => setChatVisible(!isChatVisible)}
        >
          Bạn muốn trợ giúp gì không? <div className="triangle"></div>
        </div>
      )}

      <div className="icon-container">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5ed4e2568b3cd8fad51396eb795f9e0f471eb1829b0f0afb04a63b8c8a38373f?apiKey=a8e99f3721b24ee5acfd958ae906ebbf&"
          className="feedback-icon"
          alt="Feedback Icon"
        />
      </div>
    </section>
  );
};

export default ChatContainer;
