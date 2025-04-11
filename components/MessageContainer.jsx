import React from "react";
import { RefreshIcon } from "./Icons";

export const MessageContainer = () => {
  return (
    <section className="p-3 rounded-xl bg-[#0062FF15] space-y-2">
      <div className="flex justify-between mb-2">
        <span className="flex space-y-2 mb-1 gap-1 items-center">
          <p className="text-sm font-medium mb-0">Vanilla AI</p>
          <p className="text-neutral-500 text-sm font-medium">Suggested</p>
        </span>
        <span className="flex gap-2 items-center text-sm font-medium">
          <RefreshIcon /> Regenerate
        </span>
      </div>

      <p className="text-sm">
        Oh no! Sad to hear that, but of course we can give a refund. Can you
        please provide your order number if you have one? Or email that you’ve
        used to make this purchase.
      </p>

      <p className="border-b text-sm font-medium w-max">
        Reply with this message
      </p>
    </section>
  );
};
