import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class search_post_dto {
  @IsString()
  @IsNotEmpty()
  hashtag: string;

  @IsDate()
  @IsNotEmpty()
  period_max: string;

  @IsDate()
  @IsNotEmpty()
  period_min: string;

  @IsNumber()
  @IsNotEmpty()
  influencer_id: number;

  @IsString()
  folower_max: number;

  @IsString()
  folower_min: number;

  @IsString()
  interest: string;

  @IsString()
  age: number;

  @IsString()
  gender: string;
}
