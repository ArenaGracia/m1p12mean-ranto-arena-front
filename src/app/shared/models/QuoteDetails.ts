import { Quote } from "./Quote";
import { PrestationBrand } from "./PrestationBrand";

export class QuoteDetails {
  id: string = "";
  price: number = 0;
  quote: Quote;
  prestationBrand: PrestationBrand;

  constructor( parameters: Partial<QuoteDetails> = {} ) {
    Object.assign(this, parameters); 
    this.quote = parameters.quote ? new Quote(parameters.quote) : new Quote(); 
    this.prestationBrand = parameters.prestationBrand ? new PrestationBrand(parameters.prestationBrand) : new PrestationBrand(); 
  }

}
