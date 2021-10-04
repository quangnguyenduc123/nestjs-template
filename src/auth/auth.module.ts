import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PrismaService } from '../prisma.service';
import { AuthResolver } from './auth.resolver';

@Module({
  providers: [AuthService, PrismaService, AuthResolver],
})
export class AuthModule {}
