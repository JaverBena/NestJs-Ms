import { ConfigModule, ConfigService } from "@nestjs/config";
import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";

import * as Joi from "joi";

import config from "./bootstrap/config";
import { UsersModule } from "./users/users.module";
import { HttpContextMiddleware } from "./shared/middlewares/http-context.middleware";
import { DatabaseModule } from "./database/database.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
      isGlobal: true,
      envFilePath: config[process.env.NODE_ENV],
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid("local", "develop", "production")
          .default("local"),
        PORT: Joi.number().default(3000),
      }),
    }),
    DatabaseModule,
    UsersModule,
  ],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class AppModule implements NestModule {
  static PORT: number;
  constructor(private readonly configService: ConfigService) {
    AppModule.PORT = this.configService.get<number>("PORT");
  }
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(HttpContextMiddleware).forRoutes("*");
  }
}
