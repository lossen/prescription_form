import { DeliveryDate, Pharmacy, TimeSlot } from "../../types";
import PharmacyDetails from "./PharmacyDetails";
import RecipeDetails from "./RecipeDetails";
import RecipePreferences from "./RecipePreferences";
import Notes from "./Notes";
import DeliveryDetails from "./DeliveryDetails";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import ContactInfo from "./ContactInfo";
import Payment from "./Payment";

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
    <div className="py-6 px-40">
      <h2 className="font-bold text-xl mb-6">Prescription</h2>
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-5 gap-6"
        >
          <div className="col-span-3">
            <div className="form-box">
              <PharmacyDetails />
              <RecipeDetails />
              <RecipePreferences />
              <Notes />
              <DeliveryDetails />
            </div>
          </div>
          <div className="col-span-2">
            <ContactInfo />
            <Payment />
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
