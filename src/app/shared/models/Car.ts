import { Brand } from "./Brand";
import { User } from "./User";

export class Car {
  id: string = "";
  license_plate_number: string = "";
  brand: Brand = new Brand();

  constructor(parameters: Partial<Car> = {}) {
    Object.assign(this, parameters);
    this.brand = parameters.brand ? new Brand(parameters.brand) : new Brand();
  }
}
