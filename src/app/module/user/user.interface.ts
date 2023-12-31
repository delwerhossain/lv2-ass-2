export type TUserName = {
  firstName: string;
  lastName: string;
};
export type TAddress = {
  street: string;
  city: string;
  country: string;
};
export type TOrders = {
  productName: string;
  price: number;
  quantity: number;
};
export interface TUser {
  userId: number;
  username: string;
  password: string;
  fullName: TUserName;
  age: number;
  email: string;
  isActive?: boolean | undefined;
  hobbies?: string[] | undefined;
  address: TAddress;
  orders?: TOrders[] | undefined;
  isDelete: boolean;
}
