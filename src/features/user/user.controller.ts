import { CreateUserDto } from './user.dto';
import { UserService } from './user.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getAll(): Promise<{ name: string; age: number }[]> {
    return await this.userService.getAll();
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }
}
