import { useFormContext } from "react-hook-form";
import FormError from "./FormError";

type Props = {
  placeholder?: string;
  name: string;
  required?: boolean;
  maxLength?: number;
  minLength?: number;
  pattern?: RegExp;
};
export const Input = ({
  placeholder,
  name,
  required = false,
  maxLength,
  minLength,
  pattern,
}: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="">
      <input
        type="number"
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
        {...register(name, {
          required: { value: required, message: "Required field" },
          maxLength: maxLength
            ? {
                value: maxLength,
                message: `Maximum ${maxLength} length`,
              }
            : undefined,
          minLength: minLength
            ? {
                value: minLength,
                message: `Minimum ${minLength} length`,
              }
            : undefined,
          pattern: pattern
            ? { value: pattern, message: "Incorrect format" }
            : undefined,
        })}
      />
      <FormError errors={errors} name={name} />
    </div>
  );
};
