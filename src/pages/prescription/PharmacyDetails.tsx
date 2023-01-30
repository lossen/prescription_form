import { pharmacies } from "../../constants";
import Select from "../../components/form/Select";
import Legend from "../../components/form/Legend";
import { TSelectEvent } from "../../types";

type Props = {
  handleChange: (e: TSelectEvent) => void;
};

export default function PharmacyDetails({ handleChange }: Props) {
  return (
    <div className="mb-4">
      <Legend>Pharmacy details</Legend>
      <Select
        labelText={"Choice Pharmacy"}
        name="pharmacy"
        onChange={handleChange}
        required
      >
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
