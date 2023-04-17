import { createTruck, getTruck } from '../services/TruckService';
import { Get, Post, Put, Delete, Route, Tags, Body, Path, Controller } from 'tsoa';
import { TruckModel } from '../models/index';

interface AppResponse {
  status_code: number
  data?: any
  message?: string
}
@Route('v1/truck')
@Tags('Truck')
export class TruckController extends Controller {
  @Get('{id}')
  public async getTruck(@Path() id: number): Promise<AppResponse> {
    try {
      const truck = await getTruck(id);

      if (truck) {
        return { status_code: 200, data: truck };
      } else {
        return { status_code: 404, message: "Truck not found" };
      }

    } catch (error) {
      return { status_code: 500, message: (error as Error).message };
    }
  }

  @Post()
  public async createTruck(@Body() truck: TruckModel): Promise<AppResponse> {
    try {
      const data = await createTruck(truck);

      if (data) {
        return { status_code: 200, data: data };
      } else {
        return { status_code: 404, message: "Truck not found" };
      }

    } catch (error) {
      return { status_code: 500, message: (error as Error).message };
    }

  }

  // @Put('{id}')
  // public async updateTruck(@Path() id: number, @Body() truck: Truck): Promise<Truck> {
  //   const repository = getRepository(Truck);
  //   const updateResult = await repository.update(id, truck);
  //   if (updateResult.affected === 0) {
  //     throw new Error(`Truck with id ${id} not found.`);
  //   }
  //   return await repository.findOneOrFail(id);
  // }

  // @Delete('{id}')
  // public async deleteTruck(@Path() id: number): Promise<void> {
  //   const repository = getRepository(Truck);
  //   const deleteResult = await repository.delete(id);
  //   if (deleteResult.affected === 0) {
  //     throw new Error(`Truck with id ${id} not found.`);
  //   }
  // }

  // @Get()
  // public async getTrucks(): Promise<Truck[]> {
  //   const repository = getRepository(Truck);
  //   return await repository.find();
  // }
}
