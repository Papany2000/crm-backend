import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument, ProductDTO } from '../schemas/product.schema';

@Injectable()
export class ProductService {
  constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) { }

  async create(createProductDto: ProductDTO): Promise<Product> {
    const createdProduct = new this.productModel(createProductDto);
    return createdProduct.save();
  }

  async findAll(): Promise<Product[]> {
    return this.productModel.find();
  }

  async removeProduct(id: number): Promise<Product> {
    return this.productModel.findByIdAndDelete(id)
  }
}