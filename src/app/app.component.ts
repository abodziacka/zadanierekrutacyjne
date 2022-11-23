import { Component,ViewEncapsulation, OnInit, Inject } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { OrdersService } from './services/orders.service';
import {Orders } from './models';
import {MatDialog} from '@angular/material/dialog';
import { DialogAppComponent } from './dialog-app/dialog-app.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
  title = 'zadanierekrutacyjne';
  orders: any;
  dataSource = new MatTableDataSource<Orders>();

  displayedColumns: string[] = ['order', 'date', 'price', 'customer'];


  constructor(private ordersService: OrdersService, public dialog: MatDialog) {}



  ngOnInit(){
    this.getOrders();

    this.dataSource=new MatTableDataSource(this.orders);
    this.dataSource.paginator = this.paginator;
    setTimeout(() => this.dataSource.paginator = this.paginator);
  }


  getOrders(){
    this.ordersService.getOrders().subscribe((data)=>{this.orders=data
    this.dataSource.data = this.orders;
    })
  }

  gerFirstProduct(element: Orders) {
    return element.line_items[0].name + ' x ' + element.line_items[0].quantity + "...";
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;


  openDialog(id: number){
    this.dialog.open(DialogAppComponent, {
      width: '700px',
      height: '800px',
      data: {id: id},
    });
  }


}

