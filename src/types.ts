export type User = {
  email: string;
  password: string;
  age: number;
  addresses: Address[];
};

export type Address = {
  street: string;
  city: string;
  country: string;
  zipCode: number;
};
