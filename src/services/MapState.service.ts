import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { MapState, MapStateDocument, MapStateDTO } from '../schemas/mapState.schema';

@Injectable()
export class MapStateService {
  constructor(@InjectModel(MapState.name) private mapStateModel: Model<MapStateDocument>) { }

  async create(createMapStateDto: MapStateDTO): Promise<MapState> {
    const createdMapState = new this.mapStateModel(createMapStateDto);
    return createdMapState.save();
  }

  async findAll(): Promise<MapState[]> {
    return this.mapStateModel.find();
  }

  async removeMapState(id: number): Promise<MapState> {
    return this.mapStateModel.findByIdAndDelete(id)
  }

  async getMapState(id: number): Promise<MapState> {
    return this.mapStateModel.findById(id)
  }
}