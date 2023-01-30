import { useState } from "react";
import {
  DeliveryDate,
  Pharmacy,
  TFormSubmitEvent,
  TInputEvent,
  TSelectEvent,
  TTextareaEvent,
  TimeSlot,
} from "../../types";
import PharmacyDetails from "./PharmacyDetails";
import RecipeDetails from "./RecipeDetails";
import RecipePreferences from "./RecipePreferences";
import Notes from "./Notes";
import DeliveryDetails from "./DeliveryDetails";

export interface PrescriptionFormState {
  delivery_date: DeliveryDate;
  pharmacy: Pharmacy;
  tax_code: number;
  recipe_number: number;
  delivery_time: TimeSlot;
  recipe_preferences: string;
  notes: string;
}

export default function Prescription() {
  const [data, setData] = useState<PrescriptionFormState>(
    {} as PrescriptionFormState
  );

  const handleSubmit = (e: TFormSubmitEvent) => {
    e.preventDefault();
  };

  const handleChange = (e: TSelectEvent | TInputEvent | TTextareaEvent) => {
    const value = e.target.value;
    const name = e.target.name;
    setData((curState: PrescriptionFormState) => ({
      ...curState,
      [name]: value,
    }));
  };

  return (
    <div className="py-6">
      <h2 className="font-bold text-xl mb-6">Prescription</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-2">
        <div className="shadow-md rounded px-8 pt-6 pb-8 mb-4 bg-white">
          <PharmacyDetails handleChange={handleChange} />
          <RecipeDetails data={data} handleChange={handleChange} />
          <RecipePreferences data={data} handleChange={handleChange} />
          <Notes data={data} handleChange={handleChange} />
          <DeliveryDetails
            data={data}
            handleChange={handleChange}
            setData={setData}
          />
        </div>
        <div>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
            Confirm your order
          </button>
        </div>
      </form>
    </div>
  );
}
