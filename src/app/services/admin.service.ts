import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedService } from './shared.service';

import { Admin } from '../mainboard/complaint/admin/Admin';
import { Complaint } from '../mainboard/complaint/Complaint';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  domainName:string ;

  constructor(private http: HttpClient,private sharedService:SharedService) { 
    this.domainName = this.sharedService.getDomainName();
  }

  login(admin:Admin)
  {
    console.log(admin.username.toString())
    return this.http.post(this.domainName+"admin/logincheck",admin,{responseType:'text' as 'json'});
  }

  register(admin: Admin)
  {
    return this.http.post(this.domainName+"admin/register",admin,{responseType:'text' as 'json'});
  }

  getUnresolved()
  {
    return this.http.get<Complaint[]>(this.domainName+"admin/uncomplaints");
  }

  getAll()
  {
    return this.http.get<Complaint[]>(this.domainName+"admin/allcomplaints");
  }
  updateComplaint(complaint:Complaint)
  {
    return this.http.post(this.domainName+"admin/update",complaint,{responseType:'test' as 'json'});
  }
}
