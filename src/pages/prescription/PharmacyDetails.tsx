import { pharmacies } from "../../constants";
import Select from "../../components/form/Select";
import Legend from "../../components/form/Legend";

export default function PharmacyDetails() {
  return (
    <div className="mb-4">
      <Legend>Pharmacy details</Legend>
      <Select labelText={"Choice Pharmacy"} name="pharmacy" required>
        {pharmacies.map((item) => {
          return (
            <option value={item.name} key={item.id}>
              {item.name}
            </option>
          );
        })}
      </Select>
    </div>
  );
}
