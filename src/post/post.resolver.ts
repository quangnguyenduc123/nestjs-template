import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { PostCreateInput } from 'src/graphql';
import { PostService } from './post.service';

@Resolver()
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Mutation('createPost')
  async create(@Args('post') args: PostCreateInput) {
    return this.postService.createPost(args);
  }
}
