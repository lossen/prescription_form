import Select from "../../components/form/Select";
import Legend from "../../components/form/Legend";
import { dates } from "../../constants";
import { DeliveryDate } from "../../types";
import { useEffect, useState } from "react";
import { useController, useFormContext } from "react-hook-form";

const datesOptions = dates.map((item, i) => {
  return (
    <option value={item.date} key={item.id}>
      {item.date}
    </option>
  );
});

export default function DeliveryDetails() {
  const { control } = useFormContext();
  const { field } = useController({ name: "delivery_date", control });

  const [selectedDate, setSelectedDate] = useState<DeliveryDate>(
    {} as DeliveryDate
  );

  useEffect(() => {
    const newDate = dates.find((date) => date.date === field.value);
    if (newDate) {
      setSelectedDate(newDate);
    }
  }, [field.value]);

  return (
    <fieldset className="columns-2">
      <Legend>Delivery details</Legend>
      <Select labelText={"Select Date"} name="delivery_date" required={true}>
        {datesOptions}
      </Select>

      <Select labelText={"Time slot"} name="delivery_time" required={true}>
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
