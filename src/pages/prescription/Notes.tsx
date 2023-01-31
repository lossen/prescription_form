import Legend from "../../components/form/Legend";
import Textarea from "../../components/form/Textarea";

export default function Notes() {
  return (
    <div className="mb-4">
      <Legend>Your notes</Legend>
      <Textarea name="notes" />
    </div>
  );
}
