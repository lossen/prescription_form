import React from "react";
import { useFormContext } from "react-hook-form";
import FormError from "./FormError";

type Props = {
  labelText: string;
  name: string;
  children: React.ReactNode;
  placeholder?: string;
  required?: boolean;
};

export default function Select({
  labelText,
  name,
  children,
  placeholder = "",
  required = false,
}: Props) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="relative z-0 w-full">
      <select
        placeholder={placeholder}
        className="
        block
        w-full
        rounded-md
        border-gray-300
        shadow-sm
        focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
        h-16"
        defaultValue={""}
        {...register(name, {
          required: { value: required, message: "Required field" },
        })}
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
      <FormError errors={errors} name={name} />
    </div>
  );
}
