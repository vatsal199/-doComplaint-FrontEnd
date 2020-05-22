import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComplaintComponent } from './mainboard/complaint/complaint.component';
import { RentComponent } from './mainboard/rent/rent.component';
import { ShopComponent } from './mainboard/shop/shop.component';
import { RequestComponent } from './mainboard/request/request.component';

const appRoutes:Routes = [
    {path:'rent',component:RentComponent},
    {path:'shop',component:ShopComponent},
    {path:'complaints',component:ComplaintComponent},
    {path:'request',component:RequestComponent},
    {path:'**',redirectTo:'rent'}
];

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})

export class AppRoutingModule { }
