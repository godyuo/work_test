import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SearchPostController } from './search_post/search_post.controller';
import { SearchPostModule } from './search_post/search_post.module';

@Module({
  imports: [SearchPostModule],
  controllers: [AppController, SearchPostController],
  providers: [AppService],
})
export class AppModule {}
