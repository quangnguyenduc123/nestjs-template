import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthPayload, LoginInput, User } from 'src/graphql';
import { AuthService } from './auth.service';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}
  @Mutation('login')
  async login(@Args('data') args: LoginInput) {
    const user: User = await this.authService.login(args);
    if (!user) {
      return null;
    }
    const res: AuthPayload = {
      username: user.username,
      id: user.id,
      token: '123123123123123',
    };
    return res;
  }
}
