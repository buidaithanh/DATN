import React from "react";
import styled from "styled-components";
import Message from "../chat/Message";
const Messages = () => {
  return (
    <Container>
      <Message />
      <Message />
      <Message />
      <Message />
    </Container>
  );
};

export default Messages;
const Container = styled.div`
  padding: 1rem;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: #0f1125;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 666px;
  }
`;
