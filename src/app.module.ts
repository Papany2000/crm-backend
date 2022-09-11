import { Module } from '@nestjs/common';
import { CatController } from './controllers/cat.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Cat, CatSchema } from './schemas/cat.schema';
import {Product, ProductSchema} from './schemas/product.schema'
import { ProductController } from './controllers/product.controller';
import { ProductService } from './services/product.service';
import { CatService } from './services/cat.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://admin:123@localhost:27017/data'), 
    MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }]), 
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }])
  ],
  controllers: [CatController, ProductController],
  providers: [CatService, ProductService],
})
export class AppModule { }
