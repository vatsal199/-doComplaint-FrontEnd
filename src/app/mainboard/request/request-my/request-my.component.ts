import { Component, OnInit } from '@angular/core';
import { Request } from '../../../models/request.model';
import { RequestService } from '../../../services/request.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-request-my',
  templateUrl: './request-my.component.html',
  styleUrls: ['./request-my.component.css']
})
export class RequestMyComponent implements OnInit {

  items:Request[][] = [];
  itemsInRow:number = 5;
  requestServiceSub:Subscription;

  editForm: FormGroup;

  constructor(private requestService:RequestService,
    private authService:AuthService,
    private modalService: NgbModal) { }

  ngOnInit(): void {
      this.getItems();
      this.requestServiceSub =  this.requestService.requestedItemsObservable.subscribe(
        (item:Request) => {
          this.addNewItem(item);
        }
      );

      this.editForm = new FormGroup({
        'title' : new FormControl(null),
        'sDesc' : new FormControl(null),
        'url' : new FormControl(null),
        'id' : new FormControl(null)
      });

  }

  ngOnDestroy():void {
      this.requestServiceSub.unsubscribe();
  }

  getItems(){
    let temp:Request[] = this.requestService.getLoadedData();
    let enroll:string = this.authService.getEnrollId();
    let len = temp.length;
    let i = 0;
    this.items = [];
    while(i<len){
        let oneRow:Request[] = [];
        let rowCount = this.itemsInRow;
        while(i<len && rowCount != 0){
            if(temp[i].enrollNo === enroll){
              oneRow.push(temp[i]);
              rowCount--;
            }
            i++;
        }
        this.items.push(oneRow);
    }
  }

  addNewItem(item:Request){
    let len = this.items.length;
    if(this.items[len-1].length == this.itemsInRow){
      this.items.push([item]);
    }else{
      this.items[len-1].push(item);
    }
  }

  open(content,id:number) {
    let data:Request = this.requestService.getDataById(id);

    this.editForm.setValue({
      title : data.title,
      sDesc : data.shortDesc,
      url : data.imgUrl,
      id : data.id
    });

    this.modalService.open(content,{ariaLabelledBy: 'modal-basic-title',centered: true});
    console.log("Edit request Clicked...");
  }

  onUpdate(){

    this.modalService.dismissAll();

    let newItem:Request = {
      id : this.editForm.value.id,
      title : this.editForm.value.title,
      shortDesc : this.editForm.value.sDesc,
      imgUrl : this.editForm.value.url,
      enrollNo : this.authService.getEnrollId(),
      mobilenumber : this.authService.getMobileNumber()
    };

    let flag:boolean = true;
    for(let i=0;i<this.items.length && flag;i++){
        for(let j=0;j<this.items[i].length;j++){
            if(this.items[i][j].id == newItem.id){
                this.items[i][j] = newItem;
                flag = false;
                break;
            }
        }
    }

    this.requestService.updateDataById(newItem);
  }

  onDelete(id:number){
    this.requestService.deleteDataById(id);
    this.getItems();
  }

}
