import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsUrl } from "class-validator";

export class CreateCourseDto {

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  title:string

  @ApiProperty()
  @IsNotEmpty()
  price: number

  @ApiProperty()
  @IsNotEmpty()
  description: string

  @ApiProperty()
  @IsNotEmpty()
  @IsUrl()
  cover: string
}
