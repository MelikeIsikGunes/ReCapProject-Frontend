import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'; //apiden istekte bulunmak için
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { NaviComponent } from './components/navi/navi.component';
import { CarComponent } from './components/car/car.component';
import { RentalComponent } from './components/rental/rental.component';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { CarDetailComponent } from './components/car-detail/car-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    ColorComponent,
    CustomerComponent,
    NaviComponent,
    CarComponent,
    RentalComponent,
    FilterPipePipe,
    CarDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
