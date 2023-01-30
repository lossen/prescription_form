import React from "react";
import { TSelectEvent } from "../../types";

type Props = {
  labelText: string;
  name: string;
  children: React.ReactNode;
  onChange: (e: TSelectEvent) => void;
  placeholder?: string;
  required?: boolean;
};

export default function Select({
  labelText,
  name,
  children,
  onChange,
  placeholder = "",
  required,
}: Props) {
  return (
    <div className="relative z-0 w-full">
      <select
        required={required}
        name={name}
        placeholder={placeholder}
        className="
        block
        w-full
        rounded-md
        border-gray-300
        shadow-sm
        focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
        h-16"
        onChange={onChange}
        defaultValue={""}
      >
        <option disabled hidden value={""}></option>
        {children}
      </select>
      <label
        htmlFor={name}
        className="absolute duration-300 top-0 left-3 origin-0 text-gray-500 text-sm"
      >
        {labelText}
      </label>
      {/* <span class="text-sm text-red-600 hidden" id="error">
        Email address is required
      </span> */}
    </div>
  );
}
