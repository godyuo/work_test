import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { InfluEncer } from "./src/entity/influencer";
import { SearchPost } from "./src/entity/search_post";

import * as dotenv from 'dotenv';
dotenv.config();

const config: TypeOrmModuleOptions = {
    type: 'mysql',
    host: process.env.MYSQL_HOST,
    port: parseInt(process.env.MYSQL_PORT, 10),
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    entities: [InfluEncer, SearchPost],
    synchronize: true,
    autoLoadEntities: true,
    logging: true,
    logger: 'file',

  }
  export = config;