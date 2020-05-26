import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private domainName:string = 'http://172.17.0.2:8090/';

  constructor() { }

  getDomainName():string{
    return this.domainName;
  }

}
