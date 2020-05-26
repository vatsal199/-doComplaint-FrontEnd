import { Component, OnInit } from '@angular/core';
import { Admin } from '../Admin';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ad-login',
  templateUrl: './ad-login.component.html',
  styleUrls: ['./ad-login.component.css']
})
export class AdLoginComponent implements OnInit {

  admin:Admin = new Admin("","","");
  login_check:String;
  message:String;


  constructor(
    private adminService:AdminService,
    private router:Router
  ) { }
  
  ngOnInit(): void {
  }
  
  login()
  {
    this.adminService.login(this.admin)
    .subscribe((data)=>{
      this.login_check = data.toString();
      if(this.login_check == "True")
      {
        sessionStorage.setItem("admin_username",this.admin.username.toString());
        this.router.navigate(['/adminComplaints']);
      }
      else
      {
        this.message = "Admin Does Not Exists or Wrong Username/Password";
      }
    });
  }
}
