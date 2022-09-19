import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { OrderService } from '../services/order.servise';
import { Order, OrderDTO} from '../schemas/order.schema';

@Controller()
export class OrderController {
  constructor(private readonly orderService: OrderService) { }

  @Post('/orders/create')
  createOrder(@Body() order: OrderDTO): Promise<Order> {
    console.log(order)
    return this.orderService.create(order);
  }
  @Get('/orders')
  getOrder(): Promise<Order[]> {
    return this.orderService.findAll();
  }

  @Get('/orders')
  getOrders(): Promise<Order[]> {
    return this.orderService.findAll();
  }

  @Delete('/orders/:id')
  deleteOrder(@Param('id') id: number): Promise<Order> {
    return this.orderService.removeOrder(id);
  }
}