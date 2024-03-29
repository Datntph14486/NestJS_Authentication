import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async getAll() {
    return [{ name: 'dat', age: 20 }];
  }

  async create(createUserDto: CreateUserDto) {
    const user = await this.userRepository.findOne({
      where: { email: createUserDto.email },
    });

    if (user) {
      throw new BadRequestException();
    }

    const createUser = await this.userRepository.create(createUserDto);
    const saveUser = await this.userRepository.save(createUser);
    delete saveUser.password;
    delete saveUser.refreshToken;

    return saveUser;
  }
}
