import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as Feather from 'feather-icons';

import { RequestService } from '../../../services/request.service';
import { AuthService } from '../../../services/auth.service';
import { Request } from '../../../models/request.model';
import { Email } from '../../../models/email.model';

@Component({
  selector: 'app-request-all',
  templateUrl: './request-all.component.html',
  styleUrls: ['./request-all.component.css']
})
export class RequestAllComponent implements OnInit, AfterViewInit {

  items:Request[][] = [];
  itemsInRow:number = 5;


  constructor(private requestService:RequestService,
              private authService:AuthService) { }

  ngOnInit(): void {
    this.getItems();
  }

  ngAfterViewInit(){
    Feather.replace();
  }

  getItems(){
      // let temp:Request[] = this.requestService.getData();
      // this.setData(temp);

      this.requestService.getData().subscribe(
        (response:Request[]) => {
          this.setData(response);
        }
      );
  }

  setData(data:Request[]){
    let len = data.length;
    let i = 0;
    while(i<len){
        let oneRow:Request[] = [];
        let rowCount = this.itemsInRow;
        while(i<len && rowCount != 0){
            oneRow.push(data[i]);
            i++;
            rowCount--;
        }
        this.items.push(oneRow);
    }
  }

  requestPull(item:Request){

    let emailDetails : Email = {
      ownerEnrollNo : this.authService.getEnrollId(),
      enrollNo : item.enrollNo,
      itemId : item.id
    };

    this.requestService.requestPull(emailDetails);
  }

  disablePull(enrollNo:string):boolean{
    if(this.authService.getEnrollId() === enrollNo)
      return true;
    return false;
  }

}
