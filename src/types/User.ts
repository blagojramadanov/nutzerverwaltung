export const Gender = {
  MALE: "Männlich",
  FEMALE: "Weiblich",
  OTHER: "Divers",
  NONE: "",
} as const;

export type Gender = (typeof Gender)[keyof typeof Gender];

export type User = {
  id: number;
  name: string;
  email: string;
  gender: Gender;
  address: string;
  phone: string;
  web: string;
  dob: string;
};
