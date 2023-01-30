import Select from "../../components/form/Select";
import Legend from "../../components/form/Legend";
import { dates } from "../../constants";
import { DeliveryDate, TInputEvent, TSelectEvent } from "../../types";
import { PrescriptionFormState } from "./Prescription";
import { Dispatch, SetStateAction, useState } from "react";

type Props = {
  handleChange: (e: TSelectEvent | TInputEvent) => void;
  data: PrescriptionFormState;
  setData: Dispatch<SetStateAction<PrescriptionFormState>>;
};

const datesOptions = dates.map((item, i) => {
  return (
    <option value={item.id} key={item.id}>
      {item.date}
    </option>
  );
});

export default function DeliveryDetails({
  handleChange,
  data,
  setData,
}: Props) {
  const [selectedDate, setSelectedDate] = useState<DeliveryDate>(
    {} as DeliveryDate
  );

  const handleChangeDate = (e: TSelectEvent) => {
    const name = e.target.name;
    const value = e.target.value;
    let date = dates?.find((item) => item.id === parseInt(value));
    if (date) {
      setData((curState: PrescriptionFormState) => ({
        ...curState,
        [name]: date?.date,
      }));
      setSelectedDate(date);
    }
  };
  return (
    <fieldset className="columns-2">
      <Legend>Delivery details</Legend>
      <Select
        labelText={"Select Date"}
        name="delivery_date"
        onChange={handleChangeDate}
        required={true}
      >
        {datesOptions}
      </Select>

      <Select
        labelText={"Time slot"}
        name="delivery_time"
        onChange={handleChange}
        required={true}
      >
        {selectedDate?.time_slots?.map((item) => {
          return (
            <option value={item.time} key={item.id}>
              {item.time}
            </option>
          );
        })}
      </Select>
    </fieldset>
  );
}
