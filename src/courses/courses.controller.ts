import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpException, HttpStatus, ParseIntPipe, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { SlugPipe } from './pipes/slug.pipe';

@ApiTags('courses')
//@ApiBearerAuth() //indica a la documentacion que todas las rutas de este controller estan protegidas
@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @ApiBearerAuth() //indica que esta ruta en particlar esta protegida
  @Post()
  @HttpCode(201)
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.coursesService.create(createCourseDto);
  }


  @Get(':title')
  getDetail(
    @Param('title', new SlugPipe()) title: string
  ){

    console.log('__TITLE__', title)
    return this.coursesService.findOne(1)
  }

}
