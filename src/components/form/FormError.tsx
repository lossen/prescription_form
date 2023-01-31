import { ErrorMessage } from "@hookform/error-message";
import React from "react";

type Props = {
  errors: { [x: string]: any };
  name: string;
};

export default function FormError({ errors, name }: Props) {
  if (!errors[name]) return null;
  return (
    <div className={"text-red-500"} data-testid="error-message">
      <ErrorMessage errors={errors} name={name} />
    </div>
  );
}
