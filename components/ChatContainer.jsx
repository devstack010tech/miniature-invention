import React from "react";
import {
  AtIcon,
  AttachmentIcon,
  CopyIcon,
  EmojiIcon,
  MagicIcon,
  SendIcon,
  SlashIcon,
  StartIcon,
} from "./Icons";

export const ChatContainer = () => {
  return (
    <div className="rounded-xl w-full custom-shadow">
      <textarea
        rows={1}
        placeholder="Typing"
        className="p-3 border-0 w-full focus:outline-none focus:ring-0 resize-none"
      ></textarea>
      <div className="flex pr-2 lg:pr-0 lg:max-w-10/12 justify-between items-center">
        <div className="flex  items-center">
          <span className="p-3">
            <CopyIcon />
          </span>
          <span className="p-3">
            <StartIcon />
          </span>
          <span className="p-3">
            <AttachmentIcon />
          </span>
          <span className="p-3">
            <EmojiIcon />
          </span>
          <span className="p-3">
            <AtIcon />
          </span>
          <span className="p-3">
            <SlashIcon />
          </span>

          <div className="w-px h-5 bg-gray-300/50 mx-2"></div>

          <button className="flex gap-2 items-center font-medium text-xs">
            <MagicIcon />
            <p>Quick reply with AI</p>
          </button>
        </div>
        <button className="rounded-md p-2 bg-neutral-100 cursor-pointer">
          <SendIcon />
        </button>
      </div>
    </div>
  );
};
