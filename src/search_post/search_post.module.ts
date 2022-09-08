import { Module } from '@nestjs/common';
import { SearchPostService } from './search_post.service';
import { SearchPostController } from './search_post.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SearchPost } from '../entity/search_post';
import { InfluEncer } from '../entity/influencer';

@Module({
  imports: [TypeOrmModule.forFeature([SearchPost, InfluEncer])],
  controllers: [SearchPostController],
  providers: [SearchPostService],
})
export class SearchPostModule {}
