import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
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

  @OneToOne(() => InfluEncer, (influencer) => influencer.search_post)
  @JoinColumn([{ name: 'influencer_id', referencedColumnName: 'id'}])
  influencer: InfluEncer;
}
