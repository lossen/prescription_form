import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function SecondaryButton({ children }: Props) {
  return (
    <button
      type="button"
      className="border-orange-500 border-1 text-orange-500 hover:text-white hover:bg-orange-600 font-black py-3 px-4 rounded-lg w-full text-lg mb-4"
    >
      {children}
    </button>
  );
}
