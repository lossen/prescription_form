import { recipe_preferences } from "../../constants";
import Legend from "../../components/form/Legend";
import Radio from "../../components/form/Radio";

export default function RecipePreferences() {
  return (
    <fieldset className="columns-2 mb-4">
      <Legend>Recipe preferences</Legend>
      {recipe_preferences.map(({ id, value, caption }) => (
        <Radio
          name={"recipe_preferences"}
          value={value}
          caption={caption}
          key={id}
          // required
        />
      ))}
    </fieldset>
  );
}
