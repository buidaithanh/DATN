import React from "react";
import styled from "styled-components";
import Messages from "../chat/Messages";
import MessageInput from "../chat/MessageInput";
const MessageContainer = () => {
  return (
    <Container>
      <div className="to-user">
        <span>To: </span>
        <span style={{ fontWeight: "bold" }}>Baymax</span>
      </div>
      <Messages />
      <MessageInput />
    </Container>
  );
};

export default MessageContainer;
const Container = styled.div`
  width: 100%;
  //   padding: 20px;
  display: flex;
  flex-direction: column;
  .to-user {
    color: #acacac;
    font-size: 18px;
    padding: 0.6rem 2rem;
    background-color: #4e4e4e;
  }
`;
