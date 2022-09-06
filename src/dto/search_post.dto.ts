import { IsDate, IsNotEmpty, IsString } from 'class-validator';

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

  @IsString()
  folower_max: string;

  @IsString()
  folower_min: string;

  @IsString()
  interest: string;

  @IsString()
  age: string;

  @IsString()
  gender: string;
}
