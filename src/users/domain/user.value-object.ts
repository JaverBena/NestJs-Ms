import { IUserEntity } from "./user.entity";

export class UserValueObject implements IUserEntity {
  name: string;
  lastName: string;
  email: string;

  constructor(user: IUserEntity) {
    this.name = user.name;
    this.lastName = user.lastName;
    this.email = user.email;
  }
}
