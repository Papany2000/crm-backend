import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OrganizationDocument = Organization & Document;

@Schema()
export class Organization {
  @Prop()
  name: string;

  @Prop()
  phone: string;

  @Prop()
  email: string;

  @Prop()
  manager: string;

  @Prop()
  managerWorkPhone: string;

  @Prop()
  managerEmail: string;

  @Prop()
  supportEmail: string;

  @Prop()
  supprotPhone: string;
}
export interface OrganizationDTO {
  name: string;
  phone: string;
  email: string;
  manager: string;
  managerWorkPhone: string;
  managerEmail: string;
  supportEmail: string;
  supprotPhone: string;
  id: string;
}

export const OrganizationSchema = SchemaFactory.createForClass(Organization);

OrganizationSchema.method('toJSON', function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});