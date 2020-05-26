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
    console.log("Sign out clicked...");
    sessionStorage.setItem("rollnumber","loggedout");     
    sessionStorage.setItem("admin_username","loggedout");
    this.authService.setLogOut();
    console.log(sessionStorage.getItem("rollnumber"));
    this.router.navigate([""]);
  }

}
