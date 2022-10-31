import { NestFactory } from '@nestjs/core';
import {
  GraphQLSchemaBuilderModule,
  GraphQLSchemaFactory,
} from '@nestjs/graphql';
import { printSchema } from 'graphql';
import { AppModule } from './app.module';
import { AuthResolver } from './auth/auth.resolver';
import { UserResolver } from './user/user.resolver';

async function generateSchema() {
  const app = await NestFactory.create(GraphQLSchemaBuilderModule);
  await app.init();

  const gqlSchemaFactory = app.get(GraphQLSchemaFactory);
  const schema = await gqlSchemaFactory.create([UserResolver, AuthResolver], {
    skipCheck: true,
    orphanedTypes: [],
  });
  console.log(printSchema(schema));
}

async function bootstrap() {
  generateSchema();
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
