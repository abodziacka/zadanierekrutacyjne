
export interface Orders {
  id: number;
  biling: any;
  date_created: Date;
  line_items: Items[];
  currency: string;
  total: number;
  shipping: Array<Shipping>;
  cart_tax: number;
}
 export interface Items {
  name: string;
  quantity: number;
 }

 export interface Shipping {
  address_1: string;
  address_2: string;
  first_name: string;
 }


