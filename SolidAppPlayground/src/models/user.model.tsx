import { Address } from "./address.model";

export interface User {
  id: number;
  name: string;
  nickName: string;
  email: string;
  createDate: Date;
  address?: Address;
}
