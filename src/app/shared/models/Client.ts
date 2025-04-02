import { Car } from "./Car";
import { User } from "./User";

export class Client extends User{
  cars: Car[] = [];

  constructor(parameters: Partial<Client> = {}) {
    super(parameters);
    this.cars = parameters.cars ? parameters.cars.map(car => new Car(car)) : [];
  }
  
}
