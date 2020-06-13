import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from '../model/user.model';
import { UserRepository } from '../repository/user.repository';
import { UserController } from '../controller/user.controller';
import { UserService } from '../service/user.service';

@Module({
    imports: [
      MongooseModule.forFeature([
        {
          name: 'User', schema: UserSchema
        }
      ])
    ],
    controllers: [
      UserController
    ],
    providers: [
      UserRepository,
      UserService
    ],
  })

export class UserModule {}