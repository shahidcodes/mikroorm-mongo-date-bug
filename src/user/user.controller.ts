import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/test')
  test(@Body() payload: any) {
    return this.userService.test(payload);
  }

  @Post('/book')
  createBook(@Body() payload: { name: string }) {
    return this.userService.createBook(payload);
  }

  @Get('/')
  getUser() {
    return this.userService.find();
  }
}
