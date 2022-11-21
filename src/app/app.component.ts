import { Component,ViewEncapsulation, OnInit, Inject } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { OrdersService } from './orders.service';
import { Items, Orders } from './models';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Dialog } from '@angular/cdk/dialog';
import { DialogAppComponent } from './dialog-app/dialog-app.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit {
  title = 'zadanierekrutacyjne';
  orders: any;
  dataSource = new MatTableDataSource<Orders>();

  displayedColumns: string[] = ['order', 'date', 'price', 'customer'];

  constructor(private ordersService: OrdersService, public dialog: MatDialog) {}

  ngOnInit(){
    this.getOrders();
  }

  getOrders(){
    this.ordersService.getOrders().subscribe((data)=>{this.orders=data
    console.log(data)
    this.dataSource.data = this.orders;
    console.log(this.dataSource);})
  }

  gerFirstProduct(element: Orders) {
    return element.line_items[0].name + ' x ' + element.line_items[0].quantity + "...";
  }


  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource=new MatTableDataSource(this.orders);
    console.log(this.paginator)
    this.dataSource.paginator = this.paginator;
    setTimeout(() => this.dataSource.paginator = this.paginator);
    console.log(this.dataSource);
  }

  openDialog(id: number){
    this.dialog.open(DialogAppComponent, {
      width: '700px',
      height: '800px',
      data: {id: id},
    });
  }


}

