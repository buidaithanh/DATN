import React from "react";
import ActionManage from "../../components/admin/ActionManage";
import Header from "../../components/admin/Header";

const Chat = () => {
  return (
    <>
      <ActionManage />
      <Header />
      <div className="session-chat">chat</div>
    </>
  );
};

export default Chat;
