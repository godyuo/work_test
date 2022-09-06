import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { search_post_dto } from 'src/dto/search_post.dto';
import { SearchPost } from 'src/entity/search_post';
import { Repository } from 'typeorm';

@Injectable()
export class SearchPostService {
  constructor(
    @InjectRepository(SearchPost)
    private SearchPostRepository: Repository<SearchPost>,
  ) {}

  async findpost(body: search_post_dto) {
    return 'ㅁㄴㅇ';
  }
}
