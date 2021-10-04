/* eslint-disable prettier/prettier */
import { GqlModuleOptions, GqlOptionsFactory } from '@nestjs/graphql';
import { Injectable } from '@nestjs/common';
import { join } from 'path';

@Injectable()
export class GraphqlOptions implements GqlOptionsFactory {
  createGqlOptions(): Promise<GqlModuleOptions> | GqlModuleOptions {
    return {
      context: ({ req, res }) => ({ req, res }),
      typePaths: ['./**/*.graphql'], // path for gql schema files
      installSubscriptionHandlers: true,
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
      debug: true,
      introspection: true,
      playground: true,
      cors: false,
    };
  }
}
