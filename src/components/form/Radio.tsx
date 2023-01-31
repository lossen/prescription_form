import { ErrorMessage } from "@hookform/error-message";
import { useFormContext } from "react-hook-form";

type Props = {
  name: string;
  value: string;
  caption: string;
  required?: boolean;
};

export default function Radio({
  name,
  value,
  caption,
  required = false,
}: Props) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <label className="flex flex-row rounded-md px-4 py-2 border-1 border-gray-300 bg-transparent">
        <input
          className="mr-2 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          type="radio"
          value={value}
          {...register(name, {
            required: { value: required, message: "Required field" },
          })}
        />
        <div className="flex flex-col">
          <span className="">{value}</span>
          <span className="text-sm ">{caption}</span>
        </div>
      </label>
      <div className={"text-red-500"}>
        <ErrorMessage errors={errors} name={name} />
      </div>
    </div>
  );
}
