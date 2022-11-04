import { IUserEntity } from "./user.entity";

export interface IUserRepository {
  findUserByEmail(email: string): Promise<IUserEntity>;
  createUser(user: IUserEntity): Promise<any>;
  getUsers(): Promise<IUserEntity[]>;
}
