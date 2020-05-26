import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Student } from '../components/student/Student';
import { Student } from '../mainboard/complaint/student/Student';
import { StudentComplaint } from '../mainboard/complaint/student/StudentComplaint';
// import { Complaint } from '../components/Complaint';
import { Complaint } from '../mainboard/complaint/Complaint';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  domainName:string = 'http://172.17.0.2:8090/';
  //domainName:string = 'http://127.0.0.1:8090/';

  constructor(private http: HttpClient) { }

  login(student:Student)
  {
    return this.http.post(this.domainName+"student/logincheck",student,{responseType:'text' as 'json'});
  }

  getComplaints(username:String)
  {
    return this.http.get<Complaint[]>(this.domainName+"student/yourcomplaints/"+username);
  }
  addComplaint(newComplaint: StudentComplaint)
  {
    return this.http.post(this.domainName+"addComplaint",newComplaint,{responseType:'text' as 'json'});
  }
  updateComplaint(complaint:Complaint)
  {
    //console.log(complaint.id);
    let res =  this.http.post(this.domainName+"student/update",complaint,{responseType:'text' as 'json'});
    //console.log(complaint.id);
    return res;
  }


  register(student: Student)
  {
    return this.http.post(this.domainName+"student/register",student,{responseType:'text' as 'json'});
  }
}
