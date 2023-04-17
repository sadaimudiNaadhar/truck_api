import { repoCreateTruck, repoGetTruck } from "../repositories/TruckRepository";
import { Truck } from '../infrastructure/db/entities/Truck';
import { TruckModel } from '../models/index';

export async function getTruck(id: number): Promise<Truck | null> {
    return await repoGetTruck(id)
}

export async function createTruck(truck: TruckModel): Promise<Truck> {
    return await repoCreateTruck(truck)
}