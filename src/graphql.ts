
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface LoginInput {
    username: string;
    password: string;
}

export interface PostCreateInput {
    title: string;
    authorId: number;
}

export interface UserCreateInput {
    email: string;
    password: string;
    username: string;
    name: string;
}

export interface UserUpdateInput {
    id: number;
    email?: Nullable<string>;
    password?: Nullable<string>;
    username?: Nullable<string>;
    name?: Nullable<string>;
}

export interface AuthPayload {
    id: number;
    username: string;
    token: string;
}

export interface IMutation {
    login(data?: Nullable<LoginInput>): Nullable<AuthPayload> | Promise<Nullable<AuthPayload>>;
    createPost(post: PostCreateInput): Nullable<Post> | Promise<Nullable<Post>>;
    createUser(user: UserCreateInput): Nullable<User> | Promise<Nullable<User>>;
    updateUser(user: UserUpdateInput): Nullable<User> | Promise<Nullable<User>>;
    deleteUser(id: number): Nullable<User> | Promise<Nullable<User>>;
}

export interface Post {
    id: number;
    title?: Nullable<string>;
    published?: Nullable<boolean>;
    authorId: number;
}

export interface IQuery {
    users(): Nullable<Nullable<User>[]> | Promise<Nullable<Nullable<User>[]>>;
    user(id: number): Nullable<User> | Promise<Nullable<User>>;
}

export interface User {
    id: number;
    name?: Nullable<string>;
    email?: Nullable<string>;
    username?: Nullable<string>;
    password?: Nullable<string>;
    posts?: Nullable<Post[]>;
}

type Nullable<T> = T | null;
