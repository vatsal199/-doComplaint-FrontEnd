import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private domainName:string = 'http://127.0.0.1:8090/';

  constructor() { }

  getDomainName():string{
    return this.domainName;
  }

}
