import { Module } from '@nestjs/common';
import { SearchPostService } from './search_post.service';
import { SearchPostController } from './search_post.controller';

@Module({
  imports: [],
  controllers: [SearchPostController],
  providers: [SearchPostService],
})
export class SearchPostModule {}
