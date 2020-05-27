import { Injectable } from '@angular/core';
import { Profile } from '../models/profile.model';
import { Subject } from 'rxjs/Subject';

import { SharedService }from './shared.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user:Profile;
  loggedIn:boolean = false;
  loadSideBar = new Subject();
  domainName:string;

  constructor(private sharedService:SharedService,
    private http:HttpClient ) {
      this.domainName = sharedService.getDomainName();
      //this.addtempData();
   }

  addUserData(enrollNo:string){
    let url = this.domainName+'student/viewProfile';

    const headers = new HttpHeaders({
      'Content-Type':'application/json'
    });
    let item = { enrollNo:enrollNo };
    this.http.post(url,item,{headers:headers}).subscribe((response:any) => {
        //console.log("user added...."+enrollNo);
        let temp:Profile = {
          enrollNo: response.rollnumber,
          name : response.username,
          imgUrl : response.imgUrl,
          roomNo : response.roomnumber,
          mobilenumber : response.mobilenumber
        };
        this.user = temp;
    });
  }


  getUserData(){
    return this.user;
  }

  setLogOut(){
    this.loggedIn = false;
    this.loadSideBar.next(false);
  }

  setLogIn(){
    this.loggedIn = true;
    let enrollNo:string = sessionStorage.getItem("rollnumber");
    this.addUserData(enrollNo);
    this.loadSideBar.next(true);
  }

  isAuthanticated(){
    return this.loggedIn;
  }

  getMobileNumber(){
    return this.user.mobilenumber;
  }

  getEnrollId(){
    return this.user.enrollNo;
  }

  getName(){
    return this.user.name;
  }

  photoEdit(imgUrl:string){
    //console.log(url);
    console.log("profile images update call....");
    this.user.imgUrl = imgUrl;

    let url = this.domainName+'student/updateProfile';

    const headers = new HttpHeaders({
      'Content-Type':'application/json'
    });

    this.http.post(url,this.user,{headers:headers}).subscribe((response:any) => {
        console.log("profile images id updated....");
        console.log(response);
    });
    
  }

  // addtempData(){
  //   let temp:Profile = {
  //       enrollNo : 'MT2019033',
  //       name : 'Dhameliya Vatsalkumar',
  //       imgUrl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSKNkizjthbhD4ZCYksTcTYHSyPeWNLI_IKKxEga6sZMDBf7hVJ&usqp=CAU',
  //       roomNo : 'B-479',
  //       gender : 'Male',
  //       mobilenumber : '9537517274'
  //   };
  //   this.user = temp;
  // }
}
