import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { ProductService } from '../services/product.service';
import { Product, ProductDTO} from '../schemas/product.schema';

@Controller()
export class ProductController {
  constructor(private readonly productService: ProductService) { }

  @Post('/product/create')
  createProduct(@Body() product: ProductDTO): Promise<Product> {
    return this.productService.create(product);
  }

  @Get('/products')
  getProducts(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Delete('/product/:id')
  deleteProduct(@Param('id') id: number): Promise<Product> {
    return this.productService.removeProduct(id);
  }
}