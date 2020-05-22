import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/Rx';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import { Request } from '../models/request.model';
import { SMS } from '../models/sms.model';
import { Observable } from 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private requestedItems:Request[];
  requestedItemsObservable = new Subject();
  domainName:string = 'http://127.0.0.1:8090/';


  constructor(private http:HttpClient) { 
    this.addtempData(); 
    //this.addData();
  }

  addItem(item:Request){
    this.requestedItems.push(item);
    this.requestedItemsObservable.next(item);
  }

  // addItem(item:Request){
  //   let url = this.domainName+'addRent';

  //   const headers = new HttpHeaders({
  //     'Content-Type':'application/json'
  //   });

  //   this.http.post(url,item,{headers:headers}).subscribe((response:number) => {
  //       item.id = response;
  //       this.requestedItems.push(item);
  //       this.requestedItemsObservable.next(item);
  //   });
  // }

  getData():Request[] {
    return this.requestedItems;
  }

  // getData():Observable<any> {
  //   let url = this.domainName+'getAllRents';
  //   return this.http.get(url).map(
  //     (response:any[]) => {
  //       // console.log(response);
  //       // console.log(response.length);
  //       // console.log(response[0].imgUrl);
  //       this.requestedItems = [];
  //       for(let i=0;i<response.length;i++){
  //           let tempData:Request = {
  //             id : response[i].id,
  //             title : response[i].title,
  //             shortDesc : response[i].shortDesc,
  //             enrollNo : response[i].rollno,
  //             mobilenumber : response[i].mobilenumber,
  //             imgUrl : response[i].img_url
  //           };
  //           this.requestedItems.push(tempData);
  //       }
  //       return this.requestedItems;
  //     }
  //   );
  // }

  getDataById(id:number){
    let item:Request = null;
    for(let i=0;i<this.requestedItems.length;i++){
      if(this.requestedItems[i].id == id){
        item = this.requestedItems[i];
        break;
      }
    }
    return item;
  }

  updateDataById(newData:Request){
    //console.log(newData);
    for(let i=0;i<this.requestedItems.length;i++){
      if(this.requestedItems[i].id == newData.id){
        this.requestedItems[i] = newData;
        break;
      }
    }

    let url = this.domainName+'updateRent';
    const headers = new HttpHeaders({
      'Content-Type':'application/json'
    });
    this.http.post(url,newData,{headers:headers}).subscribe(
      (Response) => console.log(Response)
    );
  }

  deleteDataById(id:number){
    for(let i=0;i<this.requestedItems.length;i++){
        if(this.requestedItems[i].id == id){
          i++;
          for(;i<this.requestedItems.length;i++)
              this.requestedItems[i-1] = this.requestedItems[i]; 
        }
    }
    this.requestedItems.pop();
  }

  requestPull(smsDetails: SMS){
      console.log(smsDetails);
  }

  addtempData(){
    let add = 9;
    let newData1:Request =     {
      id : 12,
      title : 'Bike',
      shortDesc : 'Bike for Sell',
      imgUrl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSsCz9EGi3C272XTDReWe4nIYnISR4lj4LAZegRbqPYaE03_V5X&usqp=CAU',
      enrollNo : 'MT2019033',
      mobilenumber : '9537517274'
    };
    let newData2:Request = {
      id : 13,
      title : 'Cricket Bat',
      shortDesc : 'Cricket Bat for Sell',
      imgUrl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTEaYMQbBZ2CR9ds_Cxt_nav1nm2dPhtKURd7JAQjkyxCrXPvw4&usqp=CAU',
      enrollNo : 'MT2019035',
      mobilenumber : '8849732347'
    };

    
    let temp:Request[] = [];
    let tempData;
    for(let i=0;i<add;i++){
      newData1.id = i;
      tempData = JSON.parse(JSON.stringify(newData1));
      temp.push(tempData);
      newData2.id = i + 20;
      tempData = JSON.parse(JSON.stringify(newData2));
      temp.push(tempData);
    }

    this.requestedItems = temp;
  }
}
