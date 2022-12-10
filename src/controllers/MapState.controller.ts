import { Controller, Get, Post, Body, Delete, Param, Query } from '@nestjs/common';
import { MapStateService } from '../services/mapState.service';
import { MapState, MapStateDTO} from '../schemas/mapState.schema';


@Controller()
export class MapStateController {
  constructor(private readonly mapStateService: MapStateService) { }

  @Post('/mapState/create')
  createMapState(@Body() mapState: MapStateDTO): Promise<MapState> {
    return this.mapStateService.create(mapState);
  }

  @Get('/mapState')
  getMapStates(): Promise<MapState[]> {
    return this.mapStateService.findAll();
  }

  @Delete('/mapState/:id')
  deleteMapState(@Param('id') id: number): Promise<MapState> {
    return this.mapStateService.removeMapState(id);
  }
  @Get('/mapState/:id')
  getMapState(@Param('id') id: number): Promise<MapState> {
    return this.mapStateService.getMapState(id);
  }
}