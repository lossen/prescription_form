import React, { ReactNode } from "react";

type Props = {
  type: "button" | "submit" | "reset";
  children: ReactNode;
};
export default function PrimaryButton({ type, children }: Props) {
  return (
    <button
      type={type}
      className="bg-orange-500 hover:bg-orange-600 text-white font-black py-3 px-4 rounded-lg w-full text-lg"
    >
      {children}
    </button>
  );
}
