import { Client } from "./Client";
import { QuoteDetails } from "./QuoteDetails";
import { State } from "./State";

export class Quote {
  id: string = "";
  totalPrice: number = 0;
  user: Client;
  state: State;
  discount: number = 0;

  quoteDetails: QuoteDetails[] = [];

  constructor(parameters: Partial<Quote> = {}) {
    Object.assign(this, parameters); 
    this.user = parameters.user ? new Client(parameters.user) : new Client(); 
    this.state = parameters.state ? new State(parameters.state) : new State(); 
    this.quoteDetails = parameters.quoteDetails ? parameters.quoteDetails.map(quoteDetail => new QuoteDetails(quoteDetail)) : [];
  }

}
