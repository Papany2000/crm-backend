import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OrderDocument = Order & Document;

@Schema()
export class Order {
  @Prop()
  Id: string;

  @Prop()
  contractId: string;

  @Prop()
  number: string;

  @Prop()
  description: string;

  @Prop()
  type: string;

  @Prop()
  supportEmail: string;

  @Prop()
  supprotPhone: string;

  @Prop()
  supprotEmialTemplate: string;
}
export interface OrderDTO {
  contractId: string;
  number: string;
  description: string;
  type: string;
  supportEmail: string;
  supprotPhone: string;
  supprotEmialTemplate: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);

OrderSchema.method('toJSON', function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});