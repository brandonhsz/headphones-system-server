import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DiademasService } from './diademas.service';
import { CreateDiademaDto } from './dto/create-diadema.dto';
import { UpdateDiademaDto } from './dto/update-diadema.dto';

@Controller('diademas')
export class DiademasController {
  constructor(private readonly diademasService: DiademasService) {}

  @Post()
  create(@Body() createDiademaDto: CreateDiademaDto) {
    return this.diademasService.create(createDiademaDto);
  }

  @Get()
  findAll() {
    return this.diademasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.diademasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDiademaDto: UpdateDiademaDto) {
    return this.diademasService.update(+id, updateDiademaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.diademasService.remove(+id);
  }
}
