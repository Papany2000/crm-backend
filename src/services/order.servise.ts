import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Order, OrderDocument, OrderDTO } from '../schemas/order.schema';

@Injectable()
export class OrderService {
  constructor(@InjectModel(Order.name) private orderModel: Model<OrderDocument>) { }

  async create(createOrderDto: OrderDTO): Promise<Order> {
    const createdOrder = new this.orderModel(createOrderDto);
    return createdOrder.save();
  }

  async findAll(): Promise<Order[]> {
    return this.orderModel.find();
  }

  async removeOrder(id: number): Promise<Order> {
    return this.orderModel.findByIdAndDelete(id)
  }

  async getOrder(id: number): Promise<Order> {
    return this.orderModel.findById(id)
  }
}