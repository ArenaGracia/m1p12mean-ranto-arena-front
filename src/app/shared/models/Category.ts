import { Prestation } from "./Prestation";

export class Category {
  _id: string = "";
  name: string = "";
  prestations: Prestation[] = [];

  constructor(parameters: Partial<Category> = {}) {
    Object.assign(this, parameters);
  }

}
