import { Component, OnInit } from '@angular/core';
import { Student } from '../Student';
import { StudentService } from '../../../../services/student.service';
import { AuthService } from '../../../../services/auth.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-st-login',
  templateUrl: './st-login.component.html',
  styleUrls: ['./st-login.component.css']
})
export class StLoginComponent implements OnInit {

  student: Student = new Student("","","","","");
  status:String;
  
  message:String;

  constructor(
    private studentService: StudentService,
    private router:Router,
    private authService: AuthService
    ) { }

  ngOnInit(): void {
  }
  Login()
  {
    let response = this.studentService.login(this.student);
    response.subscribe((data)=>{
      this.status = data.toString();
      if(this.status == "TRUE")
      {
        sessionStorage.setItem("rollnumber", this.student.rollnumber.toString());
        this.authService.setLogIn();
        this.router.navigate(['complaints']);
      }
      else
      {
        this.message = "User Does Not Exist or Username/Password Is Wrong!!!";
        //this.router.navigate(['stlogin']);
      }
    });
    console.log(status.toString());
  }
}
