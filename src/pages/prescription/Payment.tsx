import React from "react";
import PrimaryButton from "../../components/PrimaryButton";

export default function Payment() {
  return (
    <div className="form-box">
      <h3 className="font-bold mb-4">Type of payment</h3>
      <p className="mb-4">
        Payment on delivery by cash or credit, debit or debit card.
      </p>
      <p className="font-bold text-green mb-4">Shipping is free!</p>
      <PrimaryButton type="submit">Confirm your order</PrimaryButton>
    </div>
  );
}
