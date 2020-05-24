import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ComplaintComponent } from './mainboard/complaint/complaint.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RentComponent } from './mainboard/rent/rent.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainboardComponent } from './mainboard/mainboard.component';

import { AppRoutingModule } from './app-routing.module';
import { RentAllComponent } from './mainboard/rent/rent-all/rent-all.component';
import { RentMyComponent } from './mainboard/rent/rent-my/rent-my.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ShopComponent } from './mainboard/shop/shop.component';
import { ShopAllComponent } from './mainboard/shop/shop-all/shop-all.component';
import { ShopMyComponent } from './mainboard/shop/shop-my/shop-my.component';
import { RequestComponent } from './mainboard/request/request.component';
import { RequestAllComponent } from './mainboard/request/request-all/request-all.component';
import { RequestMyComponent } from './mainboard/request/request-my/request-my.component';
import { ProfileComponent } from './mainboard/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    ComplaintComponent,
    NavbarComponent,
    RentComponent,
    SidebarComponent,
    MainboardComponent,
    RentAllComponent,
    RentMyComponent,
    ShopComponent,
    ShopAllComponent,
    ShopMyComponent,
    RequestComponent,
    RequestAllComponent,
    RequestMyComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModalModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
