import { Injectable } from '@nestjs/common';
import { PostCreateInput, Post } from 'src/graphql';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  async createPost(data: PostCreateInput): Promise<Post> {
    return this.prisma.post.create({
      data,
    });
  }
}
