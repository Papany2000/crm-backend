import { Controller, Get, Post, Body, Delete, Param, Query } from '@nestjs/common';
import { OrderService } from '../services/order.servise';
import { Order, OrderDTO} from '../schemas/order.schema';

@Controller()
export class OrderController {
  constructor(private readonly orderService: OrderService) { }

  @Post('/orders/create')
  createOrder(@Body() order: OrderDTO): Promise<Order> {
    return this.orderService.create(order);
  }
  @Get('/orders')
  getOrder(@Query() query): Promise<Order[]> {
    return this.orderService.findAll(query);
  }
  @Delete('/orders/:id')
  deleteOrder(@Param('id') id: number): Promise<Order> {
    return this.orderService.removeOrder(id);
  }
}