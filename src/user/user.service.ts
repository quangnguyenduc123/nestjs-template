/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { User, UserCreateInput, UserUpdateInput } from '../graphql';
import { PrismaService } from '../prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async users(): Promise<User[]> {
    return this.prisma.user.findMany({
      include:{
        posts:{}
      }
    });
  }

  async user(id: number): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  async createUser(data: UserCreateInput): Promise<User> {
    return this.prisma.user.create({
      data,
    });
  }
  async updateUser(params: UserUpdateInput): Promise<User> {
    const { id, name, email, password, username } = params;
    return this.prisma.user.update({
      where: {
        id,
      },
      data: {
        ...(name && { name }),
        ...(email && { email }),
        ...(password && { password }),
        ...(username && { username }),
      },
    });
  }
}
