import { EntityRepository } from '@mikro-orm/mongodb';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  @InjectRepository(User) private userService: EntityRepository<User>;

  test() {
    const user = this.userService.create({
      meta: {
        lastLoginAt: new Date(),
      },
      dateWorkFineHere: new Date(),
    });
    this.userService.persistAndFlush(user);
    return user;
  }
}
