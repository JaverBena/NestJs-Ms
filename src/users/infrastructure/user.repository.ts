import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { IUserEntity } from "src/users/domain/user.entity";
import { IUserRepository } from "src/users/domain/user.repository";

import { User } from "./user.entity";

export class UserRepository implements IUserRepository {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>
  ) {}

  findUserByEmail(email: string): Promise<IUserEntity> {
    throw new Error("Method not implemented.");
  }
  async createUser(user: IUserEntity): Promise<any> {
    return await this.userRepository.save(user);
  }
  getUsers(): Promise<IUserEntity[]> {
    throw new Error("Method not implemented.");
  }
}
