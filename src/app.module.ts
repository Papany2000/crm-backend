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
import { MapState, MapStateSchema } from './schemas/mapState.schema';
import { MapStateService } from './services/mapState.service';
import { MapStateController } from './controllers/MapState.controller';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AuthController } from './controllers/auth.controller';
import { ConfigModule } from '@nestjs/config';
import {ExcelParserController} from './controllers/exselController'

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://admin:123@localhost:27017/data'), 
    MongooseModule.forFeature([{ name: Organization.name, schema: OrganizationSchema }]), 
    MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }]),
    MongooseModule.forFeature([{ name: Contract.name, schema: ContractSchema }]),
    MongooseModule.forFeature([{ name: MapState.name, schema: MapStateSchema }]),
    AuthModule,
    UsersModule,
    ConfigModule.forRoot()
  ],
  controllers: [OrganizationController, OrderController, ContractController, MapStateController, AuthController, ExcelParserController ],
  providers: [OrganizationService, OrderService, ContractService, MapStateService],

})
export class AppModule { }
