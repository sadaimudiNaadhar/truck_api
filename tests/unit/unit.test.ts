import { getConnection } from "../../src/infrastructure/db/Connection";
import { TruckModel } from "../../src/models";
import { repoCreateTruck, repoGetTruck } from "../../src/repositories/TruckRepository";

jest.mock("../../src/infrastructure/db/Connection", () => ({
  getConnection: jest.fn(() => Promise.resolve({
    getRepository: jest.fn(),
  })),
}));

describe("TruckRepository", () => {
  describe("repoGetTruck", () => {
    it("should call getRepository with the correct arguments", async () => {
      const mockGetRepository = jest.fn();
      (getConnection as jest.Mock).mockImplementationOnce(() => Promise.resolve({
        getRepository: mockGetRepository,
      }));

      const id = 1;
      await repoGetTruck(id);

      expect(mockGetRepository).toHaveBeenCalledWith(id);
    });
  });

  describe("repoCreateTruck", () => {
    it("should call getRepository with the correct arguments", async () => {
      const mockGetRepository = jest.fn();
      (getConnection as jest.Mock).mockImplementationOnce(() => Promise.resolve({
        getRepository: mockGetRepository,
      }));

      const truck: TruckModel = {
        brand: "sadsad",
        load: 1,
        capacity: 1,
        year: 1,
        numRepairs: 1,
      };
      await repoCreateTruck(truck);

      expect(mockGetRepository).toHaveBeenCalledWith(truck);
    });
  });
});

