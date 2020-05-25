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

  constructor(private http: HttpClient) { }

  login(student:Student)
  {
    return this.http.post("http://localhost:8090/student/logincheck",student,{responseType:'text' as 'json'});
  }

  getComplaints(username:String)
  {
    return this.http.get<Complaint[]>("http://localhost:8090/student/yourcomplaints/"+username);
  }
  addComplaint(newComplaint: StudentComplaint)
  {
    return this.http.post("http://localhost:8090/addComplaint",newComplaint,{responseType:'text' as 'json'});
  }
  updateComplaint(complaint:Complaint)
  {
    //console.log(complaint.id);
    let res =  this.http.post("http://localhost:8090/student/update",complaint,{responseType:'text' as 'json'});
    //console.log(complaint.id);
    return res;
  }


  register(student: Student)
  {
    return this.http.post("http://localhost:8090/student/register",student,{responseType:'text' as 'json'});
  }
}
