export class Profile {
  id: string = "";
  name: string = "";

  constructor(parameters: Partial<Profile> = {}) {
    Object.assign(this, parameters);
  }
}

