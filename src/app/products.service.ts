import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Orders } from './models';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private getProductsBeginURL ='https://llhysynjlo.cfolks.pl/wp-json/wc/v3/orders/';
  private getProductsEndURL ='?consumer_key=ck_a2670c437d6b7d9a142b49f457d2ff2c98938d47&consumer_secret=cs_364a026e37d0608d33d9ef98a24d8ad328a1c862';

  constructor(private http: HttpClient) {};

  getProducts(id: number){
    return this.http.get<Orders>(this.getProductsBeginURL+id.toString()+this.getProductsEndURL);
  }


}
