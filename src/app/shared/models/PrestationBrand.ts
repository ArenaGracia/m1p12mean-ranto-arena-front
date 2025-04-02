import { Brand } from "./Brand";
import { Prestation } from "./Prestation";

export class PrestationBrand {
  id: string = "";
  duration: number = 0;
  price: number = 0;
  prestation: Prestation;
  brand: Brand;

  constructor(parameters: Partial<PrestationBrand> = {}) {
    Object.assign(this, parameters);
    this.prestation = parameters.prestation ? new Prestation(parameters.prestation) : new Prestation();
    this.brand = parameters.brand ? new Brand(parameters.brand) : new Brand();
  }

}
