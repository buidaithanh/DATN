import React, { useState } from "react";
import "../styles/Chat.scss";
const Chat = () => {
  const [isChatVisible, setChatVisible] = useState(false);

  return (
    <>
      <section className="help-section">
        {isChatVisible ? (
          <div id="chat-container">
            <span style={{ marginTop: "-10px" }}>Chat Content</span>{" "}
            <span
              onClick={() => setChatVisible(!isChatVisible)}
              style={{
                marginLeft: "150px",
                cursor: "pointer",
                fontSize: "25px",
              }}
            >
              {" "}
              _{" "}
            </span>
            <p>This is where your chat content will be displayed.</p>
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
    </>
  );
};

export default Chat;
