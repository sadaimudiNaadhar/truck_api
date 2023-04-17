import { TruckController } from '../../../src/controllers/TruckController';
import { createTruck } from '../../../src/services/TruckService';
import { TruckModel } from '../../../src/models/index';

describe('TruckController', () => {
  const truckController = new TruckController();

  describe('GET /v1/truck/:id', () => {
    it('should return a truck when a valid ID is passed', async () => {
      // Create a test truck
      const testTruck = {
        brand: 'Test Make',
        load: 4,
        capacity: 2021,
        year: 5000,
        numRepairs: 1,
      } as TruckModel;
     const truck = await createTruck(testTruck);
let k =1;
      // Make the GET request
      const response = await truckController.getTruck(truck.id);

      expect(response.status_code).toBe(200);
      expect(response.data.id).toEqual(truck.id);
    });

    it('should return a 404 error when an invalid ID is passed', async () => {
      // Make the GET request with an invalid ID
      const response = await truckController.getTruck(0);

      // Check the response
      expect(response.status_code).toBe(404);
      expect(response.message).toBe('Truck not found');
    });
  });

//   describe('POST /v1/truck', () => {
//     it('should create a new truck', async () => {
//       // Define the test truck data
//       const testTruck: TruckModel = {
//         make: 'Test Make',
//         model: 'Test Model',
//         year: 2021,
//         payloadCapacity: 5000,
//       };

//       // Make the POST request
//       const response = await request(app).post('/v1/truck').send(testTruck);

//       // Check the response
//       expect(response.status).toBe(200);
//       expect(response.body.data).toEqual(expect.objectContaining(testTruck));

//       // Check that the truck was actually created in the database
//       const createdTruck = await getTruck(response.body.data.id);
//       expect(createdTruck).toEqual(expect.objectContaining(testTruck));
//     });
//   });
});
