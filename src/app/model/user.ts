
import {UserType} from "./user-type";

export class User {
  id: number;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  active: boolean;
  userType: UserType;

}
