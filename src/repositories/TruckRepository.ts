import { getConnection } from "../infrastructure/db/Connection";
import { Truck } from "../infrastructure/db/entities/Truck";
import { TruckModel } from '../models/index';

export async function repoGetTruck(id: number): Promise<Truck | null> {
    return (await getConnection()).getRepository(Truck).findOneById(id);
}

export async function repoCreateTruck(t: TruckModel): Promise<Truck> {
    return (await getConnection()).getRepository(Truck).save(t);
}