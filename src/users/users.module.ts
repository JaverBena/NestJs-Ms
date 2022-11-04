import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { UserUseCase } from "./application/user.use-case";
import { UserController } from "./infrastructure/user.controller";
import { User } from "./infrastructure/user.entity";
import { UserRepository } from "./infrastructure/user.repository";

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [
    UserUseCase,
    { provide: "IUserRepository", useClass: UserRepository },
  ],
})
export class UsersModule {}
