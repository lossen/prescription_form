import Legend from "../../components/form/Legend";
import { Input } from "../../components/form/Input";

export default function RecipeDetails() {
  return (
    <fieldset className="columns-2 mb-4">
      <Legend>Recipe details</Legend>
      <Input
        placeholder={"Your tax code"}
        name="tax_code"
        required
        maxLength={6}
        pattern={/^\d{6}$/}
      />
      <Input
        placeholder={"Enter the recipe number"}
        name="recipe_number"
        required
        minLength={12}
        maxLength={16}
        pattern={/^\d{12}(?:\d{4})?$/}
      />
    </fieldset>
  );
}
