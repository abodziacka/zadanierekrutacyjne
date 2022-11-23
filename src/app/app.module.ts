import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrdersService } from './services/orders.service';
import { ProductsService } from './services/products.service';
import {MatNativeDateModule} from '@angular/material/core';
import {MatChipsModule} from '@angular/material/chips';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {DialogAppComponent} from './dialog-app/dialog-app.component';


@NgModule({
  declarations: [
    AppComponent,
    DialogAppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule,
    MatNativeDateModule,
    MatChipsModule,
    MatCardModule,
    MatDialogModule



  ],
  providers: [OrdersService, ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule {


 }
