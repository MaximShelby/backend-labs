import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { TagService } from './tag.service';
import { Tag } from './tag.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Tags')
@Controller('tags')
export class TagController {
  constructor(private readonly tagService: TagService) {
  }

  @Post()
  create(@Body() tag: Tag) {
    return this.tagService.create(tag);
  }

  @Get()
  findAll() {
    return this.tagService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.tagService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() tagData: Partial<Tag>) {
    return this.tagService.update(id, tagData);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tagService.remove(id);
  }
}
