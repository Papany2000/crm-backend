import { Controller, Get, Post, Body } from '@nestjs/common';
import { CatService } from '../services/cat.service';
import { Cat } from '../schemas/cat.schema';

@Controller()
export class CatController {
  constructor(private readonly appService: CatService) { }

  @Post('/cat/create')
  createCat(@Body() cat: {
    name: string;
    age: number;
    breed: string;
  }): Promise<Cat> {
    return this.appService.create(cat);
  }

  @Get('/cats')
  getCats(): Promise<Cat[]> {
    return this.appService.findAll();
  }
}
