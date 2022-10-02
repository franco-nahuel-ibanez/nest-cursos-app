import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UsePipes, ValidationPipe, UseInterceptors, UploadedFile } from '@nestjs/common';
import { VideosService } from './videos.service';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';
import { ApiTags } from '@nestjs/swagger';
import { LoggerInterceptor } from '../utils/logger.interceptor';
import { FileInterceptor } from '@nestjs/platform-express';
import { storage } from '../utils/media.hendle';

@ApiTags('videos')
@UseInterceptors(LoggerInterceptor)
@Controller('videos')
export class VideosController {
  constructor(private readonly videosService: VideosService) {}

  @Post()
  create(@Body() createVideoDto: CreateVideoDto) {

    return this.videosService.create(createVideoDto);
  }

  @Post('upload')
  @UseInterceptors( FileInterceptor('avatar', {storage}) )
  handleUpload(
    @UploadedFile() file: Express.Multer.File
  ){
    console.log(file)
    return 'received'
  }

  @Get(':id')
  findAll(
    @Param() id: string
  ) {
    return this.videosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.videosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVideoDto: UpdateVideoDto) {
    return this.videosService.update(+id, updateVideoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.videosService.remove(+id);
  }
}
