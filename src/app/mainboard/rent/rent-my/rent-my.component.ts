import { Component, OnInit, OnDestroy } from '@angular/core';
import { Rent } from '../../../models/rent.model';
import { RentService } from '../../../services/rent.service';
import { AuthService } from '../../../services/auth.service';

import { Subscription } from 'rxjs/Subscription';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';
import * as Feather from 'feather-icons';

@Component({
  selector: 'app-rent-my',
  templateUrl: './rent-my.component.html',
  styleUrls: ['./rent-my.component.css']
})
export class RentMyComponent implements OnInit,OnDestroy {

  items:Rent[][] = [];
  itemsInRow:number = 5;
  rentServiceSub:Subscription;

  itemView:Rent;
  editForm: FormGroup;
  editView:boolean = false;

  constructor(private rentService:RentService,
    private modalService: NgbModal,
    private authService:AuthService) { }

  ngOnInit(): void {
    this.getItems();
    this.rentServiceSub =  this.rentService.rentItemsObservable.subscribe(
      (item:Rent) => {
        this.addNewItem(item);
      }
    );

    this.editForm = new FormGroup({
      'title' : new FormControl(null),
      'sDesc' : new FormControl(null),
      'desc' : new FormControl(null),
      'rent' : new FormControl(null),
      'url' : new FormControl(null)
    });
  }

  ngOnDestroy():void {
      this.rentServiceSub.unsubscribe();
  }

  getItems(){
    let temp:Rent[] = this.rentService.getLoadedData();
    let enroll:string = this.authService.getEnrollId();
    let len = temp.length;
    let i = 0;
    this.items = [];
    while(i<len){
        let oneRow:Rent[] = [];
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

  addNewItem(item:Rent){
    let len = this.items.length;
    if(this.items[len-1].length == this.itemsInRow){
      this.items.push([item]);
    }else{
      this.items[len-1].push(item);
    }
  }

  open(content,id:number) {
    //let data:Request = this.requestService.getDataById(id);
    this.itemView  = this.rentService.getItemById(id);
    this.modalService.open(content,{ariaLabelledBy: 'modal-basic-title',centered: true,size:'lg'});
  }

  onEdit(id:number){
      let data:Rent = this.rentService.getItemById(id);

      this.editForm.setValue({
        title : data.title,
        sDesc : data.shortDesc,
        desc: data.description,
        rent: data.rent,
        url : data.imgUrl
      });

      this.editView = true;
      setTimeout (() => {Feather.replace();}, 70);
  }

  onBrowseClick(fileUpload:HTMLInputElement){
    fileUpload.click();
  }

  updateFile(files:FileList,filePathView:HTMLInputElement){

    let reader = new FileReader();
    filePathView.value = files[0].name;

    reader.onload = (event:any) => {
      this.itemView.imgUrl = event.target.result;
      this.editForm.value.url = this.itemView.imgUrl;
      //console.log(event.target.result);
    };
    
    reader.readAsDataURL(files[0]);
  }

  onUpdate(id:number){
    let newItem:Rent = {
      id : this.itemView.id,
      title : this.editForm.value.title,
      shortDesc : this.editForm.value.sDesc,
      description : this.editForm.value.desc,
      imgUrl : this.editForm.value.url,
      rent: +this.editForm.value.rent,
      enrollNo: this.itemView.enrollNo,
      mobilenumber: this.itemView.mobilenumber
    };
    //console.log(newItem);
    this.itemView = newItem;

    this.editView = false;

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

    this.rentService.updateItemById(newItem);
  }

  onDelete(id:number){
    this.rentService.deleteById(id);
    this.modalService.dismissAll();
    this.getItems();
  }

}
