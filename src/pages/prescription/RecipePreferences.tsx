import { recipe_preferences } from "../../constants";
import Legend from "../../components/form/Legend";
import Radio from "../../components/form/Radio";
import { PrescriptionFormState } from "./Prescription";
import { TInputEvent } from "../../types";

type Props = {
  handleChange: (e: TInputEvent) => void;
  data: PrescriptionFormState;
};

export default function RecipePreferences({ handleChange, data }: Props) {
  return (
    <fieldset className="columns-2 mb-4">
      <Legend>Recipe preferrencies</Legend>
      {recipe_preferences.map(({ id, value, caption }) => (
        <Radio
          name={"recipe_preferences"}
          value={value}
          caption={caption}
          onChange={handleChange}
          checked={data.recipe_preferences === value}
          key={id}
        />
      ))}
    </fieldset>
  );
}
