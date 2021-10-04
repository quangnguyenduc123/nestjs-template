/* eslint-disable prettier/prettier */
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Public } from 'src/shared-decorator/public.decorator';
import { Roles } from 'src/shared-decorator/role.decorator';
import { Role } from 'src/constant/enum/role.enum';
import {  UserUpdateInput } from '../graphql';
import { UserService } from './user.service';
import { User } from 'src/shared-decorator/user.decorator';
import { UserCreateInputDTO } from './dto/create-user-input.dto';
import { Info } from 'src/shared-decorator/info.decorator';
import doesPathExist from 'src/common/check-field-node';
@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query('users')
  @Roles(Role.Admin)
  async users(@User() user, @Info() info) {
     console.log(doesPathExist(info.fieldNodes, [
        "users",
        "posts"
      ]))
    return this.userService.users();
  }
  
  @Public()
  @Query('user')
  async user(@Args('id') args: number) {
    return this.userService.user(args);
  }

  @Mutation('createUser')
  async create(@Args('user') args: UserCreateInputDTO) {
    return this.userService.createUser(args);
  }
  @Mutation('updateUser')
  @Roles(Role.Admin)
  async update(@Args('user') args: UserUpdateInput) {
    return this.userService.updateUser(args);
  }
}
