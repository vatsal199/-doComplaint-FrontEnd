import { Component, OnInit } from '@angular/core';
import { Complaint } from '../../Complaint';
import { StudentComplaint } from '../StudentComplaint';
import { StudentService } from 'src/app/services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-st-complaints',
  templateUrl: './st-complaints.component.html',
  styleUrls: ['./st-complaints.component.css']
})
export class StComplaintsComponent implements OnInit {

  complaints: Complaint[];
  newComplaint: StudentComplaint = new StudentComplaint("","");
  rollnumber:String;
  status:String = "";
  complaint:Complaint;

  constructor(
    private studentService: StudentService,
    private router:Router
    ) {}

  ngOnInit(){
    this.rollnumber = sessionStorage.getItem("rollnumber");
    if(this.rollnumber == "loggedout")
      this.router.navigate([""]);
    
    else
    {
      console.log(this.rollnumber);
      this.studentService.getComplaints(sessionStorage.getItem("rollnumber").toString())
      .subscribe((data)=> this.complaints = data);
    }
  }
  addComplaint()
  {
    this.newComplaint.rollnumber = sessionStorage.getItem("rollnumber");
    this.studentService.addComplaint(this.newComplaint)
    .subscribe((data) => {
      this.status = data.toString();
      console.log(this.status.toString());
      this.newComplaint.issue = "";
      this.ngOnInit();
    });
  }

  updateComplaint(id:number)
  {
    this.complaint= new Complaint(id,"","","","","","")
    console.log(this.complaint.id);
    let response = this.studentService.updateComplaint(this.complaint);
    response.subscribe((data)=>console.log(data.toString()))
    this.ngOnInit();
  }

  logout()
  {
    sessionStorage.setItem("rollnumber","loggedout");
    console.log(sessionStorage.getItem("rollnumber"));
    this.router.navigate([""]);
  }
}
