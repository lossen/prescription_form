import { useFormContext } from "react-hook-form";

type Props = {
  name: string;
  required?: boolean;
};

export default function Textarea({ name, required = false }: Props) {
  const { register } = useFormContext();
  return (
    <textarea
      className="
        block
        w-full
        rounded-md
        border-gray-300
        shadow-sm
        focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      {...register(name, {
        required: { value: required, message: "Required field" },
      })}
    ></textarea>
  );
}
