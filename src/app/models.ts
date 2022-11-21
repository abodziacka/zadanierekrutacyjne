
export interface Orders {
  id: number;
  status: string;
  billing: any;
  date_created: Date;
  line_items: Items[];
  currency: string;
  total: number;
  shipping: Array<string>;
  cart_tax: number;
}
 export interface Items {
  name: string;
  quantity: number;
 }

 export interface Shipping {
  first_name: string;
  last_name: string;
  address_1: string;
  address_2: string;
  city: string;
  state: string;
  postcode: string;
  country: string;
  phone: string;
 }


