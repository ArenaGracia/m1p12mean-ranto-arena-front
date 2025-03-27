export class Category {
  id: string = "";
  name: string = "";

  constructor(parameters: Partial<Category> = {}) {
    Object.assign(this, parameters);
  }

}
