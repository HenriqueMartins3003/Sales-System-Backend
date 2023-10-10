import { Injectable, NotFoundException } from '@nestjs/common';
import { UserEntity } from './entities/user.entity';
import { CreateUserDto } from './dtos/createUser.dto';
import { hash } from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly useReposirory: Repository<UserEntity>,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    const saltOrRounds = 10;
    const passwordHash = await hash(createUserDto.password, saltOrRounds);
    return this.useReposirory.save({
      ...createUserDto,
      typeUser: 1,
      password: passwordHash,
    });
  }

  async getAllUser(): Promise<UserEntity[]> {
    return this.useReposirory.find();
  }

  async getUserByIdUsingRealtion(userId: number): Promise<UserEntity> {
    return this.useReposirory.findOne({
      where: {
        id: userId,
      },
      relations: {
        addresses: {
          city: {
            state: true,
          },
        },
      },
    });
  }

  async findUserById(userId: number): Promise<UserEntity> {
    const user = await this.useReposirory.findOne({
      where: {
        id: userId,
      },
    });
    if (!user) {
      throw new NotFoundException(`UserId Not Found!`);
    }

    return user;
  }

  async findUserByEmail(email: string): Promise<UserEntity> {
    const user = await this.useReposirory.findOne({
      where: {
        email,
      },
    });
    if (!user) {
      throw new NotFoundException(`UserId Not Found!`);
    }

    return user;
  }
}
