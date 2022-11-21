import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Orders, Shipping } from '../models';
import { OrdersService } from '../orders.service';
import { Product } from '../products';
import { ProductsService } from '../products.service';

export interface DialogData {id: number}

@Component({
  selector: 'app-dialog-app',
  templateUrl: './dialog-app.component.html',
  styleUrls: ['./dialog-app.component.css']
})
export class DialogAppComponent implements OnInit {

  orders: any;
  dataSource = new MatTableDataSource<any>();
  Products: Array<Product>=[];
  product = new Product();
  order: Orders;
  shippingDetails: Array<Shipping>;

  constructor(
    public dialogRef: MatDialogRef<DialogAppComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
     private productsService: ProductsService) {}

  backClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.addProduct();
    this.productsService.getProducts(this.data.id).subscribe(order=>{
      this.order=order;
      console.log(order)});

  }

  getProducts(element: Orders){
    return element?.line_items[0].name;
    // return element.shipping;
    // return element.shipping.forEach(item=>{
    //   item.address_1;
    // })
   // this.shippingDetails=this.order.shipping;
  }

// }

  addProduct(){

    // this.ordersService.getOrders().subscribe((data)=>{this.orders=data
    //   console.log(data)

    // this.product.id=this.data;
    // this.product.name=this.orders.line_items.name;
    // this.product.quantity=this.orders.line_items.quantity;
    // this.Products.push(this.product);
    // console.log(this.Products);})
  }
}
