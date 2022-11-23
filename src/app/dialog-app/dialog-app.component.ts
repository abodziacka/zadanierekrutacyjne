import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Orders, Shipping } from '../models';
import { ProductsService } from '../services/products.service';

export interface DialogData {id: number}

@Component({
  selector: 'app-dialog-app',
  templateUrl: './dialog-app.component.html',
  styleUrls: ['./dialog-app.component.css']
})
export class DialogAppComponent implements OnInit {

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
    this.productsService.getProducts(this.data.id).subscribe(order=>{
      this.order=order;
    console.log(order)});

  }

}
