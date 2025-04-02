import { Appointment } from "./Appointment";
import { Client } from "./Client";
import { QuoteDetails } from "./QuoteDetails";
import { State } from "./State";

export class Quote {
  id: string = "";
  totalPrice: number = 0;
  finalPrice: number = 0;
  user: Client;
  state: State;
  discount: number = 0;
  appointment : Appointment ;

  quoteDetails: QuoteDetails[] = [];

  constructor(parameters: Partial<Quote> = {}) {
    console.log(parameters);
    
    Object.assign(this, parameters); 
    this.user = parameters.user ? new Client(parameters.user) : new Client(); 
    this.state = parameters.state ? new State(parameters.state) : new State(); 
    this.quoteDetails = parameters.quoteDetails ? parameters.quoteDetails.map(quoteDetail => new QuoteDetails(quoteDetail)) : [];
    this.appointment = parameters.appointment ? new Appointment(parameters.appointment) : new Appointment() ;
    this.finalPrice = parameters.finalPrice ? parameters.finalPrice : 0;
  }

}
