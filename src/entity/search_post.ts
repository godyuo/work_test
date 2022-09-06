import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { InfluEncer } from './influencer';

@Entity()
export class SearchPost {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  hashtag: string;

  @Column()
  img_url: string;

  @Column()
  post_url: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => InfluEncer, (influencer) => influencer.id)
  influencer: InfluEncer[];
}
