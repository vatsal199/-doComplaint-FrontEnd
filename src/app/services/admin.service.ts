import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Admin } from '../components/admin/Admin';
// import { Complaint } from '../components/Complaint';

import { Admin } from '../mainboard/complaint/admin/Admin';
import { Complaint } from '../mainboard/complaint/Complaint';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  domainName:string = 'http://172.17.0.2:8090/';

  constructor(private http: HttpClient) { }

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
