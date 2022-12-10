import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MapStateDocument = MapState & Document;

@Schema()
export class MapState {
    @Prop()
    coordinateX: number;

    @Prop()
    coordinateY: number;

    @Prop()
    text: string;

    @Prop()
    hit: string;


    @Prop()
    icon: string;

    @Prop()
    id: string;
}
export interface MapStateDTO {
    coordinateX: number;
    coordinateY: number;
    text: string;
    hit: string;
    icon: string;
    id: string;
}

export const MapStateSchema = SchemaFactory.createForClass(MapState);

MapStateSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});



