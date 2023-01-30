import React from "react";
import { TTextareaEvent } from "../../types";

type Props = {
  onChange: (e: TTextareaEvent) => void;
  name: string;
  value: string;
  required?: boolean;
};

export default function Textarea({ onChange, name, value, required }: Props) {
  return (
    <textarea
      className="
        block
        w-full
        rounded-md
        border-gray-300
        shadow-sm
        focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      name={name}
      value={value}
      onChange={onChange}
      required={required}
    ></textarea>
  );
}
