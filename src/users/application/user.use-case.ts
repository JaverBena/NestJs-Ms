import { Inject } from "@nestjs/common";
import { IUserRepository } from "src/users/domain/user.repository";
import { UserValueObject } from "../domain/user.value-object";
import { UserDto } from "./user.dto";

export class UserUseCase {
  constructor(
    @Inject("IUserRepository") private userRepository: IUserRepository
  ) {}

  public async createUser(user: UserDto) {
    const newUser = new UserValueObject(user);
    const userCreated = await this.userRepository.createUser(newUser);
    console.log("***", newUser);
    return userCreated;
  }
}
