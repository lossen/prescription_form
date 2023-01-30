import React from "react";
import Legend from "../../components/form/Legend";
import { Input } from "../../components/form/Input";
import { PrescriptionFormState } from "./Prescription";
import { TInputEvent } from "../../types";

type Props = {
  handleChange: (e: TInputEvent) => void;
  data: PrescriptionFormState;
};

export default function RecipeDetails({ handleChange, data }: Props) {
  return (
    <fieldset className="columns-2 mb-4">
      <Legend>Recipe details</Legend>
      <Input
        value={data.tax_code?.toString() || ""}
        placeholder={"Your tax code"}
        name="tax_code"
        onChange={handleChange}
        required
      />
      <Input
        value={data.recipe_number?.toString() || ""}
        placeholder={"Enter the recipe number"}
        name="recipe_number"
        onChange={handleChange}
        required
      />
    </fieldset>
  );
}
