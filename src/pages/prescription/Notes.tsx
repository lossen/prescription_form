import Legend from "../../components/form/Legend";
import Textarea from "../../components/form/Textarea";
import { TTextareaEvent } from "../../types";
import { PrescriptionFormState } from "./Prescription";

type Props = {
  handleChange: (e: TTextareaEvent) => void;
  data: PrescriptionFormState;
};

export default function Notes({ handleChange, data }: Props) {
  return (
    <div className="mb-4">
      <Legend>Your notes</Legend>
      <Textarea name="notes" onChange={handleChange} value={data?.notes} />
    </div>
  );
}
