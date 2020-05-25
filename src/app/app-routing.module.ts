import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StComplaintsComponent } from './mainboard/complaint/student/st-complaints/st-complaints.component';
import { RentComponent } from './mainboard/rent/rent.component';
import { ShopComponent } from './mainboard/shop/shop.component';
import { RequestComponent } from './mainboard/request/request.component';
import { ProfileComponent } from './mainboard/profile/profile.component';
import { AdComplaintsComponent } from './mainboard/complaint/admin/ad-complaints/ad-complaints.component';


import { HomeComponent } from './home/home.component';
import { AdLoginComponent } from './mainboard/complaint/admin/ad-login/ad-login.component';
import { StLoginComponent } from './mainboard/complaint/student/st-login/st-login.component';

import { AuthGuardService } from './services/auth-guard.service';

const appRoutes:Routes = [
    {path:'rent',component:RentComponent},
    {path:'shop',canActivate:[AuthGuardService],component:ShopComponent},
    {path:'complaints',canActivate:[AuthGuardService],component:StComplaintsComponent},
    {path:'adminComplaints',canActivate:[AuthGuardService],component:AdComplaintsComponent},
    {path:'request',canActivate:[AuthGuardService],component:RequestComponent},
    {path:'profile',canActivate:[AuthGuardService],component:ProfileComponent},
    {path:'adlogin',canActivate:[AuthGuardService],component:AdLoginComponent},
    {path:'stlogin',canActivate:[AuthGuardService],component:StLoginComponent},
    {path:'',canActivate:[AuthGuardService],component:HomeComponent},
    {path:'**',redirectTo:'rent'}
];

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})

export class AppRoutingModule { }
