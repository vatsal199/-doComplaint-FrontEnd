import { Component, OnInit } from '@angular/core';
import { Shop } from '../../../models/shop.model';
import { ShopService } from '../../../services/shop.service';

import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-shop-all',
  templateUrl: './shop-all.component.html',
  styleUrls: ['./shop-all.component.css']
})
export class ShopAllComponent implements OnInit {

  items:Shop[][] = [];
  itemsInRow:number = 5;
  itemView:Shop;

  constructor(private shopService:ShopService,
    private modalService: NgbModal ) { }

  ngOnInit(): void {
    this.getItems();
  }
  
  getItems(){
    let temp:Shop[] = this.shopService.getData();
    this.setData(temp);

    // this.shopService.getData().subscribe(
    //   (response:Shop[]) => {
    //     this.setData(response);
    //   }
    // );
  }

  setData(data:Shop[]){
    let len = data.length;
    let i = 0;
    while(i<len){
        let oneRow:Shop[] = [];
        let rowCount = this.itemsInRow;
        while(i<len && rowCount != 0){
            oneRow.push(data[i]);
            i++;
            rowCount--;
        }
        this.items.push(oneRow);
    }
  }

  open(content,id:number) {
    //let data:Request = this.requestService.getDataById(id);
    this.itemView  = this.shopService.getItemById(id);
    this.modalService.open(content,{ariaLabelledBy: 'modal-basic-title',centered: true,size:'lg'});
  }

}
