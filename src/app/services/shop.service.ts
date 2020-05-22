import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Rx';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';

import { Shop } from '../models/shop.model';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  private shoppingItems:Shop[];
  shoppingItemsObservable = new Subject();
  domainName:string = 'http://127.0.0.1:8090/';


  constructor(private http:HttpClient) {
    this.addtempData();
  }

  addItem(item:Shop){
    this.shoppingItems.push(item);
    this.shoppingItemsObservable.next(item);
  }

//   addItem(item:Shop){
//     let url = this.domainName+'addRent';

//     const headers = new HttpHeaders({
//       'Content-Type':'application/json'
//     });

//     this.http.post(url,item,{headers:headers}).subscribe((response:number) => {
//         item.id = response;
//         this.shoppingItems.push(item);
//         this.shoppingItemsObservable.next(item);
//     });
//  }

  getData():Shop[] {
    return this.shoppingItems;
  }

  // getData():Observable<any> {
  //   let url = this.domainName+'getAllRents';
  //   return this.http.get(url).map(
  //     (response:any[]) => {
  //       // console.log(response);
  //       // console.log(response.length);
  //       // console.log(response[0].imgUrl);
  //       this.shoppingItems = [];
  //       for(let i=0;i<response.length;i++){
  //           let tempData:Shop = {
  //             id : response[i].id,
  //             title : response[i].title,
  //             shortDesc : response[i].shortDesc,
  //             description : response[i].desc,
  //             price : response[i].price,
  //             enrollNo : response[i].rollno,
  //             mobilenumber : response[i].mobilenumber,
  //             imgUrl : response[i].img_url
  //           };
  //           this.shoppingItems.push(tempData);
  //       }
  //       return this.shoppingItems;
  //     }
  //   );
  // }

  getItemById(id:number){
    let item:Shop = null;
    for(let i=0;i<this.shoppingItems.length;i++){
        if(this.shoppingItems[i].id == id){
          item = this.shoppingItems[i];
          break;
        }
    }
    return item;
  }

  updateItemById(editedItem:Shop){
    for(let i=0;i<this.shoppingItems.length;i++){
      if(this.shoppingItems[i].id == editedItem.id){
        this.shoppingItems[i] = editedItem;
        break;
      }
    }

    // let url = this.domainName+'updateRent';
    // const headers = new HttpHeaders({
    //   'Content-Type':'application/json'
    // });
    // this.http.post(url,editedItem,{headers:headers}).subscribe(
    //   (Response) => console.log(Response)
    // );
  }

  deleteById(id:number){
    for(let i=0;i<this.shoppingItems.length;i++){
      if(this.shoppingItems[i].id == id){
        i++;
        for(;i<this.shoppingItems.length;i++)
            this.shoppingItems[i-1] = this.shoppingItems[i]; 
      }
    }
    this.shoppingItems.pop();
  }

  addtempData(){
    let add = 9;
    let newData1:Shop =     {
      id : 12,
      title : 'Bike',
      shortDesc : 'Bike for Sell',
      description : 'Long Description of Bike for sell',
      imgUrl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSsCz9EGi3C272XTDReWe4nIYnISR4lj4LAZegRbqPYaE03_V5X&usqp=CAU',
      price : 50000,
      enrollNo : 'MT2019033',
      mobilenumber : '9537517274'
    };
    let newData2:Shop = {
      id : 13,
      title : 'Cricket Bat',
      shortDesc : 'Cricket Bat for Sell',
      description : 'Long Description ofCricket Bat for sell',
      imgUrl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTEaYMQbBZ2CR9ds_Cxt_nav1nm2dPhtKURd7JAQjkyxCrXPvw4&usqp=CAU',
      price : 1000,
      enrollNo : 'MT2019035',
      mobilenumber : '8849732347'
    };

    
    let temp:Shop[] = [];
    let tempData;
    for(let i=0;i<add;i++){
      newData1.id = i;
      tempData = JSON.parse(JSON.stringify(newData1));
      temp.push(tempData);
      newData2.id = i + 20;
      tempData = JSON.parse(JSON.stringify(newData2));
      temp.push(tempData);
    }

    this.shoppingItems = temp;
  }
}
