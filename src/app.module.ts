import { Module } from '@nestjs/common';
import { OrganizationController } from './controllers/organization.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Organization, OrganizationSchema } from './schemas/organizanion.schema';
import {Order, OrderSchema} from './schemas/order.schema'
import { OrderController } from './controllers/order.controller';
import { OrderService } from './services/order.servise';
import { OrganizationService } from './services/organization.service';
import { ContractController } from './controllers/Contract.controller';
import { ContractService } from './services/contract.service';
import {Contract, ContractSchema} from './schemas/contract.schema'

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://admin:123@localhost:27017/data'), 
    MongooseModule.forFeature([{ name: Organization.name, schema: OrganizationSchema }]), 
    MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }]),
    MongooseModule.forFeature([{ name: Contract.name, schema: ContractSchema }])
  ],
  controllers: [OrganizationController, OrderController, ContractController],
  providers: [OrganizationService, OrderService, ContractService],
})
export class AppModule { }
