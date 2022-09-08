import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SearchPostModule } from './search_post/search_post.module';
import * as ormconfig from '../ormconfig'

@Module({
  imports: [
    ConfigModule.forRoot({
    isGlobal: true,
  }),
    TypeOrmModule.forRoot(ormconfig),
    SearchPostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

