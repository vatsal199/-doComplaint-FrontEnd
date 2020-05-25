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

  constructor(private http: HttpClient) { }

  login(admin:Admin)
  {
    console.log(admin.username.toString())
    return this.http.post("http://localhost:8090/admin/logincheck",admin,{responseType:'text' as 'json'});
  }

  register(admin: Admin)
  {
    return this.http.post("http://localhost:8090/admin/register",admin,{responseType:'text' as 'json'});
  }

  getUnresolved()
  {
    return this.http.get<Complaint[]>("http://localhost:8090/admin/uncomplaints");
  }

  getAll()
  {
    return this.http.get<Complaint[]>("http://localhost:8090/admin/allcomplaints");
  }
  updateComplaint(complaint:Complaint)
  {
    return this.http.post("http://localhost:8090/admin/update",complaint,{responseType:'test' as 'json'});
  }
}
