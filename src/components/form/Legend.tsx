import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export default function Legend({ children }: Props) {
  return <legend className="block font-bold mb-2">{children}</legend>;
}
