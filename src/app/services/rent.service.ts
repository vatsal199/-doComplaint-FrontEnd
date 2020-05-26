import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/Rx';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import { Rent } from '../models/rent.model';
import { Observable } from 'rxjs/Rx';

import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class RentService {
  private rentItems:Rent[] = [];
  rentItemsObservable = new Subject();
  domainName:string;

  constructor(private http:HttpClient,private sharedService:SharedService) {
      // this.addtempData();
      // let url = this.domainName+'getAllRents';
      // //let url = this.domainName+'downloadFile/rent/image.jpg';
      // this.http.get(url).subscribe(
      //   (response) => console.log(response)
      // );
      //this.addData();
      this.domainName = this.sharedService.getDomainName();
   }

  //  addItem(item:Rent){
  //     this.rentItems.push(item);
  //     this.rentItemsObservable.next(item);
  //     let url = this.domainName+'addRent';

  //     const headers = new HttpHeaders({
  //       'Content-Type':'application/json'
  //     });

  //     this.http.post(url,item,{headers:headers}).subscribe((response) => console.log(response));
  //  }

  addItem(item:Rent){
    let url = this.domainName+'addRent';

    const headers = new HttpHeaders({
      'Content-Type':'application/json'
    });
    console.log('Post fired...');
    console.log(item);
    this.http.post(url,item,{headers:headers}).subscribe((response:number) => {
        item.id = response;
        this.rentItems.push(item);
        this.rentItemsObservable.next(item);
    });
 }


  getData():Observable<any> {
    let url = this.domainName+'getAllRents';
    return this.http.get(url).map(
      (response:any[]) => {
        // console.log(response);
        // console.log(response.length);
        // console.log(response[0].imgUrl);
        this.rentItems = [];
        for(let i=0;i<response.length;i++){
            let tempData:Rent = {
              id : response[i].id,
              title : response[i].title,
              shortDesc : response[i].shortDesc,
              description : response[i].desc,
              rent : response[i].rent,
              enrollNo : response[i].rollno,
              mobilenumber : response[i].mobilenumber,
              imgUrl : response[i].img_url
            };
            //console.log(tempData.imgUrl);
            //console.log(tempData.enrollNo);
            this.rentItems.push(tempData);
        }
        return this.rentItems;
      }
    );
  }

  getLoadedData(){
    return this.rentItems;
  }

  getItemById(id:number){
    let item:Rent = null;
    for(let i=0;i<this.rentItems.length;i++){
        if(this.rentItems[i].id == id){
          item = this.rentItems[i];
          break;
        }
    }
    return item;
  }

  updateItemById(editedItem:Rent){
    for(let i=0;i<this.rentItems.length;i++){
      if(this.rentItems[i].id == editedItem.id){
        this.rentItems[i] = editedItem;
        break;
      }
    }
 
    let url = this.domainName+'updateRent';
    const headers = new HttpHeaders({
      'Content-Type':'application/json'
    });
    this.http.post(url,editedItem,{headers:headers}).subscribe(
      (Response) => console.log(Response)
    );

  }

  deleteById(id:number){
    for(let i=0;i<this.rentItems.length;i++){
      if(this.rentItems[i].id == id){
        i++;
        for(;i<this.rentItems.length;i++)
            this.rentItems[i-1] = this.rentItems[i]; 
      }
    }
    this.rentItems.pop();
    let url = this.domainName+'deleteRent';
    const headers = new HttpHeaders({
      'Content-Type':'application/json'
    });
    this.http.post(url,{id:id},{headers:headers}).subscribe(
      (Response) => console.log(Response)
    );
  }

  addData(){
    let url = this.domainName+'getAllRents';
    this.http.get(url).subscribe(
      (response:any[]) => {
        console.log(response);
        console.log(response.length);
        console.log(response[0].id);
        this.rentItems = [];
        for(let i=0;i<response.length;i++){
          let tempData:Rent;
          tempData.id = response[i].id;
          tempData.title = response[i].title;
          tempData.shortDesc = response[i].shortDesc;
          tempData.description = response[i].desc;
          tempData.rent = response[i].rent;
          tempData.enrollNo = response[i].rollno;
          tempData.mobilenumber = response[i].mobilenumber;
          this.rentItems.push(tempData);
        }
        //this.rentItems
        //console.log(response.length);
      }
    );
  }

  /*addtempData(){
    let add = 9;
    let newData1:Rent =     {
      id : 12,
      title : 'Mobile',
      shortDesc : 'Mobile for Rent',
      description : 'Long Description of Mobile for rent',
      imgUrl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR8NahId6bFQQDjd9i787mPuQyvEwFVKGup9fhY_GLHivx046TB&usqp=CAU',
      rent : 500,
      enrollNo : 'MT2019033',
      mobilenumber : '9537517274'
    };
    let newData2:Rent = {
      id : 13,
      title : 'Cycle',
      shortDesc : 'Cycle for Rent',
      description : 'Long Description of Cycle for rent',
      imgUrl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSH4u6OpVB3v_OCDJ9dAx5ddjp3gDYeT1wHnyHT0975SHpnbTrU&usqp=CAU',
      rent : 200,
      enrollNo : 'MT2019035',
      mobilenumber : '8849732347'
    };

    
    let temp : Rent[] = [];
    let tempData;
    for(let i=0;i<add;i++){
      newData1.id = i;
      tempData = JSON.parse(JSON.stringify(newData1));
      temp.push(tempData);
      newData2.id = i + 20;
      tempData = JSON.parse(JSON.stringify(newData2));
      temp.push(tempData);
    }

    this.rentItems = temp;
  }*/

}
