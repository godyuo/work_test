import { Body, Controller, Get, Post, Request } from '@nestjs/common';
import { get } from 'http';
import { search_post_dto } from 'src/dto/search_post.dto';
import { SearchPostService } from './search_post.service';

@Controller('search_post')
export class SearchPostController {
  constructor(private readonly searchpostService: SearchPostService) {}

  @Get()
    findpost(@Body() body: search_post_dto) {
    return this.searchpostService.findpost(body);
  }

  @Post('post')
    putinpost(@Request() req) {
      return this.searchpostService.putinpost(req.body)
    }

  @Post('influ')
  postinfluencer(@Request() req) {
    return this.searchpostService.postinfluencer(req.body)
  }
  @Get('r')
  test(){
    return this.searchpostService.test()
  }
}
