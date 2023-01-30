import { ChangeEvent, FormEvent } from "react";

export type TInputEvent = ChangeEvent<HTMLInputElement>;
export type TTextareaEvent = ChangeEvent<HTMLTextAreaElement>;
export type TSelectEvent = ChangeEvent<HTMLSelectElement>;
export type TFormSubmitEvent = FormEvent<HTMLFormElement>;

export type DeliveryDate = {
  id: number;
  date: string;
  time_slots: TimeSlot[];
};

export type TimeSlot = {
  id: number;
  time: string;
};

export type Pharmacy = {
  id: number;
  name: string;
};
