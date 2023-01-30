import React from "react";
import { TInputEvent } from "../../types";

type Props = {
  name: string;
  value: string;
  caption: string;
  checked: boolean;
  onChange: (e: TInputEvent) => void;
};

export default function Radio({
  name,
  value,
  caption,
  checked,
  onChange,
}: Props) {
  return (
    <label
      className="flex flex-row rounded-md
      px-4
      py-2
        border-1
        border-gray-300
        bg-transparent"
    >
      <input
        className="mr-2 shadow-sm
        focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        type="radio"
        name={name}
        checked={checked}
        onChange={onChange}
        value={value}
      />
      <div className="flex flex-col">
        <span className="">{value}</span>
        <span className="text-sm ">{caption}</span>
      </div>
    </label>
  );
}
