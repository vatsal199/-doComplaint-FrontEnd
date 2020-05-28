import { Component, OnInit } from '@angular/core';
import { Shop } from '../../../models/shop.model';
import { ShopService } from '../../../services/shop.service';
import { AuthService } from '../../../services/auth.service';

import { Subscription } from 'rxjs/Subscription';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';
import * as Feather from 'feather-icons';


@Component({
  selector: 'app-shop-my',
  templateUrl: './shop-my.component.html',
  styleUrls: ['./shop-my.component.css']
})
export class ShopMyComponent implements OnInit {

  items:Shop[][] = [];
  itemsInRow:number = 5;
  shopServiceSub:Subscription;

  itemView:Shop;
  editForm: FormGroup;
  editView:boolean = false;

  constructor(private shopService:ShopService,
    private modalService: NgbModal,
    private authService:AuthService) { }

  ngOnInit(): void {
      this.getItems();
      this.shopServiceSub =  this.shopService.shoppingItemsObservable.subscribe(
        (item:Shop) => {
          this.addNewItem(item);
        }
      );

      this.editForm = new FormGroup({
        'title' : new FormControl(null),
        'sDesc' : new FormControl(null),
        'desc' : new FormControl(null),
        'price' : new FormControl(null),
        'url' : new FormControl(null)
      });

  }

  ngOnDestroy():void {
    this.shopServiceSub.unsubscribe();
  }

  getItems(){
    let temp:Shop[] = this.shopService.getLoadedData();
    let enroll:string = this.authService.getEnrollId();
    let len = temp.length;
    let i = 0;
    this.items = [];
    while(i<len){
        let oneRow:Shop[] = [];
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

  addNewItem(item:Shop){
    let len = this.items.length;
    if(this.items[len-1].length == this.itemsInRow){
      this.items.push([item]);
    }else{
      this.items[len-1].push(item);
    }
  }

  open(content,id:number) {
    //let data:Request = this.requestService.getDataById(id);
    this.itemView  = this.shopService.getItemById(id);
    this.modalService.open(content,{ariaLabelledBy: 'modal-basic-title',centered: true,size:'lg'});
  }

  onEdit(id:number){
      let data:Shop = this.shopService.getItemById(id);

      this.editForm.setValue({
        title : data.title,
        sDesc : data.shortDesc,
        desc: data.description,
        price: data.price,
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
    let newItem:Shop = {
      id : this.itemView.id,
      title : this.editForm.value.title,
      shortDesc : this.editForm.value.sDesc,
      description : this.editForm.value.desc,
      imgUrl : this.editForm.value.url,
      price: +this.editForm.value.price,
      enrollNo: this.itemView.enrollNo,
      mobilenumber: this.itemView.mobilenumber,
      name: this.itemView.name
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

    this.shopService.updateItemById(newItem);
  }

  onDelete(id:number){
    this.shopService.deleteById(id);
    this.modalService.dismissAll();
    this.getItems();
  }

}
