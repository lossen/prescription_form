import React from "react";
import SecondaryButton from "../../components/SecondaryButton";

export default function ContactInfo() {
  return (
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
  );
}
