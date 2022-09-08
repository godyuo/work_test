import { InfluEncer } from "src/entity/influencer";
import { SearchPost } from "src/entity/search_post";
import { Connection, InsertQueryBuilder } from "typeorm";
import {Seeder,Factory} from "typeorm-seeding"



export class CreateInitialData implements Seeder {
    public async run(factory:Factory , connection:Connection) : Promise<any>{
        await connection
            .createQueryBuilder()
            .insert()
            .into(SearchPost)
            .values([{
                id: 1, hashtag: '배고파', img_url: 'path ~', post_url: 'path: 1', created_at: 20220201, updated_at: 20220202
            }
            ]).execute();

            await connection.createQueryBuilder()
            .insert()
            .into(InfluEncer)
            .values([
                {
                    nick_name: '하루하루', folower_count: 1000, interest: '간장개장', age:25, gender: 'M', profile_url:'path ~', created_at: 20220202, updated_at: 20220202
                }
            ]).execute();
        }
    }