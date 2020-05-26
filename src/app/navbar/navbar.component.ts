import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService:AuthService,
    private router:Router) { }

  ngOnInit(): void {
  }

  onSignOut(){
    //console.log("Sign out clicked...");
    if(!(sessionStorage.getItem("rollnumber") === null)){
      console.log("student logout");
      sessionStorage.setItem("rollnumber","loggedout");
    }
    if(!(sessionStorage.getItem("admin_username") === null)){
      console.log("admin logout");
      sessionStorage.setItem("admin_username","loggedout");
    }
    sessionStorage.setItem("rollnumber","loggedout");     
    sessionStorage.setItem("admin_username","loggedout");
    this.authService.setLogOut();
    //console.log(sessionStorage.getItem("rollnumber"));
    this.router.navigate([""]);
    //this.authService.setLogOut();
  }

}
