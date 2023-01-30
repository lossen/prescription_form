import React from "react";
import { TInputEvent } from "../../types";

type Props = {
  value: string;
  placeholder: string;
  name: string;
  onChange: (e: TInputEvent) => void;
  required: boolean;
};
export const Input = ({
  value,
  placeholder,
  name,
  onChange,
  required,
}: Props) => {
  return (
    <div className="">
      <input
        required={required}
        value={value}
        type="number"
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        className={`
        block
        w-full
        rounded-md
        border-gray-300
        shadow-sm
        focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
        h-16
        bg-transparent z-1`}
      />
      {/* <span class="text-sm text-red-600 hidden" id="error">
        Email address is required
      </span> */}
    </div>
  );
};
