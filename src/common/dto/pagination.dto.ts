import { IsNumber, IsOptional, IsPositive, Min } from 'class-validator';

export class PaginationDto {
  @IsOptional()
  @IsPositive()
  @IsNumber()
  @Min(1)
  @IsOptional()
  limit?: number;

  @IsOptional()
  @IsPositive()
  @IsOptional()
  offset?: number;
}
