import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  OneToOne,
  BaseEntity,
} from 'typeorm';
import { SearchPost } from './search_post';

@Entity()
export class InfluEncer{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nick_name: string;

  @Column()
  folower_count: number;

  @Column()
  interest: string;

  @Column()
  age: number;

  @Column()
  gender: string;

  @Column()
  profile_url: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToOne(() => SearchPost, (search_post) => search_post.influencer )
  search_post: SearchPost;
}
