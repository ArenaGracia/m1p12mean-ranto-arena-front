import { Mecanicien } from "./Mecanicien";
import { PrestationBrand } from "./PrestationBrand";
import { State } from "./State";
import { User } from "./User";

export class Task {
  id: string = "";
  esimatedDuration: number = 0;
  dateStart: Date = new Date();
  user: Mecanicien;
  prestationBrand: PrestationBrand;
  state: State;

  constructor(parameters: Partial<Task> = {}) {
    Object.assign(this, parameters); 
    this.user = parameters.user ? new Mecanicien(parameters.user) : new Mecanicien();
    this.prestationBrand = parameters.prestationBrand ? new PrestationBrand(parameters.prestationBrand) : new PrestationBrand();
    this.state = parameters.state ? new State(parameters.state) : new State();
  }

}
