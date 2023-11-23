export type UserName = {
  firstName: string;
  lastName: string;
};
export type Address = {
  street: string;
  city: string;
  country: string;
};
export type Orders = {
  productName: string;
  price: number;
  quantity: number;
};
export interface User {
  userId: number;
  username: string;
  password: string;
  fullName: UserName;
  age: number;
  email: string;
  isActive?: boolean;
  hobbies?: string[];
  address: Address;
  orders?: Orders[];
}