import { Component, OnInit } from '@angular/core';
import { Complaint } from '../../Complaint';
import { AdminService } from '../../../../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ad-complaints',
  templateUrl: './ad-complaints.component.html',
  styleUrls: ['./ad-complaints.component.css']
})
export class AdComplaintsComponent implements OnInit {

  complaints:Complaint[];
  complaint:Complaint;
  admin_username:String;
  all:boolean = false;
  constructor(
    private adminService: AdminService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.admin_username = sessionStorage.getItem("admin_username");
    if(this.admin_username == "loggedout")
    {
      this.router.navigate(["adlogin"]);
    }
    else
    {
      if(this.all == true)
      {
        this.adminService.getAll()
        .subscribe(data=>{
          this.complaints = data;
        })
      }
      else
      {
        this.adminService.getUnresolved()
        .subscribe(data=>{
          this.complaints = data;
        })
      }
    }
  }
  updateComplaint(id:number)
  {
    this.complaint= new Complaint(id,"","","","","","")
    console.log(this.complaint.id);
    let response = this.adminService.updateComplaint(this.complaint);
    response.subscribe((data)=>{
      console.log(data.toString());
      this.ngOnInit();
    });
  }
  logout()
  {
    sessionStorage.setItem("admin_username","loggedout");
    this.router.navigate([""]);
  }

  changeType()
  {
    if(this.all)
      this.all = false;
    else
      this.all = true;
    this.ngOnInit();
  }
}
