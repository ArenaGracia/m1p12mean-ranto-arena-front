export class State {
  id: string ="";
  name: string ="";
  value: number = 0;
  severity: string = "";

  constructor(parameters: Partial<State> = {}) {
    Object.assign(this, parameters);
  }

}
