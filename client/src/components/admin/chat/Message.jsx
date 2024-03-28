import styled from "styled-components";

const Message = () => {
  return (
    <Container>
      <div className="chat-start">
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
        <div>
          <p className="content-chat">
            What is the most popular meal in Japan? What is the most popular
            meal in Japan?, What is the most popular
          </p>
          <small
            className="time-chat"
            style={{ color: "#6D6D6D", fontWeight: "bold" }}
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
        <div>
          <p className="content-chat">
            What is the most popular meal in Japan? What is the most popular
            meal in Japan?, What is the most popular
          </p>
          <small
            className="time-chat"
            style={{ color: "#6D6D6D", fontWeight: "bold" }}
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
  .content-chat {
    margin: 0;
    padding: 10px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    font-size: 18px;
    max-width: 400px;
    color: #acacac;
    background-color: #4e4e4e;
  }
  .chat-start {
    display: flex;
    justify-content: start;
  }
  .chat-end {
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
