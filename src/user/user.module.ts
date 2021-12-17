import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { User } from './entities/user.entity';

@Module({
  providers: [UserService],
  controllers: [UserController],
  imports: [MikroOrmModule.forFeature([User])],
})
export class UserModule {}
