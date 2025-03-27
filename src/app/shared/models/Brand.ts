export class Brand {
  id: string = "";
  name: string = "";

  constructor(parameters: Partial<Brand> = {}) {
    Object.assign(this, parameters);
  }

}
