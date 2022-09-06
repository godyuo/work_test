import { Body, Controller, Get } from '@nestjs/common';
import { search_post_dto } from 'src/dto/search_post.dto';
import { SearchPostService } from './search_post.service';

@Controller('search_post')
export class SearchPostController {
  constructor(private readonly searchpostService: SearchPostService) {}

  @Get()
  async findpost(@Body() body: search_post_dto) {
    return this.searchpostService.findpost(body);
  }
}
