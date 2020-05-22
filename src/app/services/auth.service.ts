import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getMobileNumber(){
    return '9537517274';
  }

  getEnrollId(){
    return 'MT2019033';
  }

  getName(){
    return 'Vatsal';
  }
}
