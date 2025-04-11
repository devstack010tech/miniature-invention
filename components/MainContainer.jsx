import React from "react";
import { MessageContainer } from "./MessageContainer";
import { ChatContainer } from "./ChatContainer";

export const MainContainer = () => {
  return (
    <div className="h-screen flex flex-col justify-center mx-auto max-w-[772px] gap-y-4 px-3">
      <MessageContainer />
      <ChatContainer />
    </div>
  );
};
