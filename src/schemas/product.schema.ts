import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    price: number;

    @Prop()
    image: string;
}

export interface ProductDTO {
    name: string;
    price: number;
    image: string;
    id: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);

ProductSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
 });