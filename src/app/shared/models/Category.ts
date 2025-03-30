export class Category {
  _id: string = "";
  name: string = "";

  constructor(parameters: Partial<Category> = {}) {
    Object.assign(this, parameters);
  }

}
