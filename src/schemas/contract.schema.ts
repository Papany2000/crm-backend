import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ContractDocument = Contract & Document;

@Schema()
export class Contract {
  @Prop()
  organizationId: number;

  @Prop()
  number: string;

  @Prop()
  description: string;

  @Prop()
  idescription: boolean;

  @Prop()
  fileUuid: string;
}
export interface ContractDTO {
  organizationId: number;
  number: string;
  description: string;
  idescription: boolean;
  fileUuid: string;
}

export const ContractSchema = SchemaFactory.createForClass(Contract);

ContractSchema.method('toJSON', function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});