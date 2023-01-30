export const pharmacies = [
  {
    id: 0,
    name: "A",
  },
  {
    id: 1,
    name: "B",
  },
];

export const dates = [
  {
    id: 0,
    date: "Jan 26 2023",
    time_slots: [
      { id: 0, time: "10:00" },
      { id: 1, time: "11:00" },
    ],
  },
  {
    id: 1,
    date: "Jan 27 2023",
    time_slots: [
      { id: 0, time: "11:00" },
      { id: 1, time: "12:00" },
    ],
  },
];

export const recipe_preferences = [
  { id: 0, name: "originals", value: "Originals", caption: "More expensive" },
  { id: 1, name: "generics", value: "Generics", caption: "Less expensive" },
];
