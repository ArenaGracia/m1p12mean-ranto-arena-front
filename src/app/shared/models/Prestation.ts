import { Category } from "./Category";

export class Prestation {
  _id: string = "";
  name: string = "";
  description: string = "";
  image?: string;
  category: Category;

  constructor(parameters: Partial<Prestation> = {}) {
    Object.assign(this, parameters);
    this.category = parameters.category ? new Category(parameters.category) : new Category();
  }

}
