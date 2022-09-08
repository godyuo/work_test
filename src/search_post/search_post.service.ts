import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { search_post_dto } from 'src/dto/search_post.dto';
import { InfluEncer } from 'src/entity/influencer';
import { SearchPost } from 'src/entity/search_post';
import { getManager, Repository } from 'typeorm';

@Injectable()
export class SearchPostService {
  constructor(
    @InjectRepository(SearchPost)
    private readonly SearchPostRepository: Repository<SearchPost>,
    @InjectRepository(InfluEncer)
    private readonly InfluEncerRepository: Repository<InfluEncer>
  ) {}

  async findpost(data: search_post_dto) {
    const entitymanager = getManager();
    const find_tag = await entitymanager.query(` SELECT * FROM SearchPost WHERE hashtag IN(${data.hashtag}) AND created_at BETWEEN ${data.period_min} AND ${data.period_max}`);
    
    const influinfo = await entitymanager.query(` SELECT * FROM SearchPost INNER JOIN InfluEncer ON folower_count BETWEEN ${data.folower_max} AND ${data.folower_min} OR interest IN('${data.interest}') OR age IN(${data.age}) OR gender IN(${data.gender})`);

    return data;
  }

  async putinpost(data: any) {
    const userdata = await this.SearchPostRepository.findOne({
      where: { post_url: data.post_url }
    })
    if(!userdata){
      await this.SearchPostRepository.save({
        hashtag: data.hashtag,
        img_url: data.img_url,
        post_url: data.post_url,
        influencer_id: data.influencer_id
      })
    }
  }

  async postinfluencer(data:any) {
    const userdata = await this.InfluEncerRepository.findOne({
      where: { nick_name: data.nick_name }
    })
    if(!userdata){
      await this.InfluEncerRepository.save({
        nick_name: data.nick_name,
        folower_count: data.folower_count,
        interest: data.interest,
        age: data.age,
        gender: data.gender,
        profile_url: data.profile_url
      })
    }
  }

  async test() {
    const test = await this.InfluEncerRepository.find({ relations: ["search_post"] })
    return test;
  }
}
