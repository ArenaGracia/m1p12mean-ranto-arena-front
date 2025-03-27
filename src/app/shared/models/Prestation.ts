import { Category } from "./Category";

export class Prestation {
  id: string = "";
  name: string = "";
  description: string = "";
  image?: File;
  category: Category;

  constructor(parameters: Partial<Prestation> = {}) {
    Object.assign(this, parameters);
    this.category = parameters.category ? new Category(parameters.category) : new Category();
  }

}
