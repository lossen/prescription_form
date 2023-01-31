import { DeliveryDate, Pharmacy, TimeSlot } from "../../types";
import PharmacyDetails from "./PharmacyDetails";
import RecipeDetails from "./RecipeDetails";
import RecipePreferences from "./RecipePreferences";
import Notes from "./Notes";
import DeliveryDetails from "./DeliveryDetails";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

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
  const methods = useForm<PrescriptionFormState>();
  const {
    handleSubmit,
    getValues,
    formState: { isValid },
  } = methods;

  const onSubmit: SubmitHandler<PrescriptionFormState> = (data) => {
    const values = getValues();
    if (isValid) {
      setTimeout(() => {
        console.log("Send data:", values);
      }, 1000);
    }
  };

  return (
    <div className="py-6">
      <h2 className="font-bold text-xl mb-6">Prescription</h2>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2">
          <div className="shadow-md rounded px-8 pt-6 pb-8 mb-4 bg-white">
            <PharmacyDetails />
            <RecipeDetails />
            <RecipePreferences />
            <Notes />
            <DeliveryDetails />
          </div>
          <div>
            <button
              type={"submit"}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
            >
              Confirm your order
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
