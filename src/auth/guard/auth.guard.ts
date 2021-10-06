/* eslint-disable prettier/prettier */
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Reflector } from '@nestjs/core';

@Injectable()
export class AuthGuard implements CanActivate {
  public constructor(private readonly reflector: Reflector) { }
  canActivate(context: ExecutionContext): boolean {
    const ctx = GqlExecutionContext.create(context);
    try {
      const auth = ctx.getContext().req.headers.authorization;
      console.log('info', ctx.getInfo())
      console.log(auth)
      ctx.getContext().req.user = {
        id: '123',
        name: 'quang',
        role: 'User'
      }
      const isPublic = this.reflector.get<boolean>(
        'isPublic',
        context.getHandler(),
      );

      // If controller has Public decorator => pass not check jwt header
      if (isPublic) {
        return true;
      }
      console.log('Auth Guard');
      return true;
    } catch (error) {
      return true
    }
  }
}
