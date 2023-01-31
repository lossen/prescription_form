import { DeliveryDate, Pharmacy, TimeSlot } from "../../types";
import PharmacyDetails from "./PharmacyDetails";
import RecipeDetails from "./RecipeDetails";
import RecipePreferences from "./RecipePreferences";
import Notes from "./Notes";
import DeliveryDetails from "./DeliveryDetails";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import SecondaryButton from "../../components/SecondaryButton";

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
            <div className="form-box">
              <h3 className="font-bold mb-4">Need help with ordering?</h3>
              <p className="mb-4">
                We are active from Monday to Friday from 9.00 to 20.00
              </p>
              <a className="block mb-4" href="tel:+39 02 8295 4165">
                +39 02 8295 4165
              </a>
              <a className="block mb-4" href="mailto: info@1000farmacie.it">
                info@1000farmacie.it
              </a>
              <SecondaryButton>I would like more information</SecondaryButton>
              <SecondaryButton>Remind me later</SecondaryButton>
              <SecondaryButton>Want to be contactedn</SecondaryButton>
            </div>
            <div className="form-box">
              <h3 className="font-bold mb-4">Type of payment</h3>
              <p className="mb-4">
                Payment on delivery by cash or credit, debit or debit card.
              </p>
              <p className="font-bold text-green mb-4">Shipping is free!</p>
              <button
                type={"submit"}
                className="bg-orange-500 hover:bg-orange-600 text-white font-black py-3 px-4 rounded-lg w-full text-lg"
              >
                Confirm your order
              </button>
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
