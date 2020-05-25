import { Component, OnInit } from '@angular/core';
import { Admin } from '../Admin';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-ad-register',
  templateUrl: './ad-register.component.html',
  styleUrls: ['./ad-register.component.css']
})
export class AdRegisterComponent implements OnInit {

  admin:Admin = new Admin("","","");
  rootpassword:String;
  message:String = ""
  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
  }
  
  register()
  {
    if(this.rootpassword != "iiitbcomplaintadmin")
    {
      this.message = "Root Password Incorrect!!!";
    }
    else
    {
      this.adminService.register(this.admin)
      .subscribe(data =>{
        this.message = data.toString();
      })
    }
  }
}
