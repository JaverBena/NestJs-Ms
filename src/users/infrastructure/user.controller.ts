import { Controller, HttpStatus, Post, Body } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse } from "@nestjs/swagger";

import { UserDto } from "../application/user.dto";
import { UserUseCase } from "../application/user.use-case";

@ApiTags()
@Controller("/users")
export class UserController {
  constructor(private readonly userUseCase: UserUseCase) {}

  @ApiOperation({ summary: "Create a new user" })
  @ApiResponse({
    description: "Return status OK",
    status: HttpStatus.OK,
  })
  @ApiResponse({
    description: "Internal Error",
    status: HttpStatus.INTERNAL_SERVER_ERROR,
  })
  @Post()
  async createUser(@Body() userBody: UserDto): Promise<any> {
    return await this.userUseCase.createUser(userBody);
  }
}
