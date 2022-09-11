import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cat, CatDocument } from '../schemas/cat.schema';

@Injectable()
export class CatService {
  constructor(@InjectModel(Cat.name) private catModel: Model<CatDocument>) { }

  async create(createCatDto): Promise<Cat> {
    console.log(createCatDto)
    const createdCat = new this.catModel(createCatDto);
    return createdCat.save();
  }

  async findAll(): Promise<Cat[]> {
    return this.catModel.find().exec();
  }
}
