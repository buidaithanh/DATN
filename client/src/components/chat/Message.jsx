import styled from "styled-components";

const Message = () => {
  return (
    <Container>
      <div className="chat-start">
        <div style={{ position: "relative" }}>
          <img
            className="img-message"
            style={{
              width: "26px",
              height: "26px",
              borderRadius: "999px",
              marginRight: "10px",
            }}
            src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg"
            alt=""
          />
          <span className="online-indicator"></span>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <p className="content-chat">
            What is the most popular meal in Japan? What is the most popular
            meal in Japan?, What is the most popular
          </p>
          <small
            className="time-chat"
            style={{ color: "#6D6D6D", fontWeight: "bold", fontSize: "10px" }}
          >
            30:20
          </small>
        </div>
      </div>
      <div className="chat-end">
        <div style={{ position: "relative" }}>
          <img
            className="img-message"
            style={{
              width: "26px",
              height: "26px",
              borderRadius: "999px",
              marginRight: "10px",
            }}
            src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg"
            alt=""
          />
          <span className="online-indicator"></span>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <p className="content-chat">I dont know?</p>
          <small
            className="time-chat"
            style={{ color: "#6D6D6D", fontWeight: "bold", fontSize: "10px" }}
          >
            30:20
          </small>
        </div>
      </div>
      <div className="chat-end">
        <div style={{ position: "relative" }}>
          <img
            className="img-message"
            style={{
              width: "26px",
              height: "26px",
              borderRadius: "999px",
              marginRight: "10px",
            }}
            src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg"
            alt=""
          />
          <span className="online-indicator"></span>
        </div>
        <div>
          <p className="content-chat">I dont know?</p>
          <small
            className="time-chat"
            style={{ color: "#6D6D6D", fontWeight: "bold", fontSize: "10px" }}
          >
            30:20
          </small>
        </div>
      </div>
    </Container>
  );
};

export default Message;
const Container = styled.div`
  margin-top: 10px;
  .online-indicator {
    position: absolute;
    top: -3px;
    right: 8px;
    width: 8px;
    height: 8px;
    border: 3px solid white;
    border-radius: 50%;
    background-color: #00ff19;
  }
  .content-chat {
    margin: 0px;
    padding: 6px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    font-size: 14px;
    max-width: 150px;
    color: #3c3c3c;
    background-color: #f0f0f0;
  }
  .chat-start {
    display: flex;
    justify-content: start;
  }
  .chat-end {
    margin-right: 10px;
    display: flex;
    justify-content: end;
    flex-direction: row-reverse;
    .img-message {
      display: none;
    }
    .online-indicator {
      display: none;
    }
    .content-chat {
      background-color: #0584fe;
      color: #ffffff;
      border-top-right-radius: 20px;
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 0;
    }
    .time-chat {
      float: right;
    }
  }
`;
