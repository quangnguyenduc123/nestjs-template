/* eslint-disable prettier/prettier */
import { IsEmail, IsString, MinLength } from 'class-validator';
import { UserCreateInput } from '../../graphql';

export class UserCreateInputDTO implements UserCreateInput {
  @IsString()
  @IsEmail()
  readonly email: string;
  @IsString()
  @MinLength(5)
  readonly password: string;
  @IsString()
  @MinLength(5)
  username: string;
  @IsString()
  @MinLength(5)
  name: string;
}
