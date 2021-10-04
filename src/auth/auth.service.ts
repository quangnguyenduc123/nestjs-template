import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { LoginInput, User } from '../graphql';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async login(data: LoginInput): Promise<User | null> {
    return this.prisma.user.findFirst({
      where: {
        username: data.username,
        password: data.password,
      },
    });
  }
}
