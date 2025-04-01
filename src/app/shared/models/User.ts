import { Profile } from "./Profile";

export class User {
  _id: string = "";
  name: string = "";
  firstName: string = "";
  email: string = "";
  password?: string = "";
  contact: string = "";
  profile: Profile = new Profile();

  constructor(parameters: Partial<User> = {}) {
    Object.assign(this, parameters);
    this.profile = parameters.profile ? new Profile(parameters.profile) : new Profile();
  }
}

