import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { SearchPost } from './search_post';

@Entity()
export class InfluEncer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nick_name: string;

  @Column()
  folower_count: string;

  @Column()
  interest: string;

  @Column()
  age: string;

  @Column()
  gender: string;

  @Column()
  profile_url: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => SearchPost, (search_post) => search_post.id, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'search_post_id', referencedColumnName: 'id' }])
  search_post: SearchPost;
}
