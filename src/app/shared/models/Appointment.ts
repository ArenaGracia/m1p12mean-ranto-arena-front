import { Car } from "./Car";
import { Quote } from "./Quote";

export class Appointment {
  id: string = "";
  timeStart: Date = new Date();
  timeEnd: Date = new Date();
  realTimeStart: Date = new Date();
  realTimeEnd: Date = new Date();
  quote: Quote;
  car: Car;

  constructor(parameters: Partial<Appointment> = {}) {
    Object.assign(this, parameters); 
    this.quote = parameters.quote ? new Quote(parameters.quote) : new Quote(); 
    this.car = parameters.car ? new Car(parameters.car) : new Car(); 
  }

}
