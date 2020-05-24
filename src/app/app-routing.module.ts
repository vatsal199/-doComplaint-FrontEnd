import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComplaintComponent } from './mainboard/complaint/complaint.component';
import { RentComponent } from './mainboard/rent/rent.component';
import { ShopComponent } from './mainboard/shop/shop.component';
import { RequestComponent } from './mainboard/request/request.component';
import { ProfileComponent } from './mainboard/profile/profile.component';

import { AuthGuardService } from './services/auth-guard.service';

const appRoutes:Routes = [
    {path:'rent',component:RentComponent},
    {path:'shop',canActivate:[AuthGuardService],component:ShopComponent},
    {path:'complaints',canActivate:[AuthGuardService],component:ComplaintComponent},
    {path:'request',canActivate:[AuthGuardService],component:RequestComponent},
    {path:'profile',canActivate:[AuthGuardService],component:ProfileComponent},
    {path:'**',redirectTo:'rent'}
];

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})

export class AppRoutingModule { }
