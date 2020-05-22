import { Component, OnInit } from '@angular/core';
import { Rent } from '../../../models/rent.model';
import { RentService } from '../../../services/rent.service';

import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-rent-all',
  templateUrl: './rent-all.component.html',
  styleUrls: ['./rent-all.component.css']
})
export class RentAllComponent implements OnInit {

  items:Rent[][] = [];
  itemsInRow:number = 5;
  itemView:Rent;


  constructor(private rentService:RentService,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getItems();
  }

  getItems(){
      this.rentService.getData().subscribe(
        (response:Rent[]) => {
          this.setData(response);
        }
      );
  }

  setData(data:Rent[]){
    let len = data.length;
    let i = 0;
    while(i<len){
        let oneRow:Rent[] = [];
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
    //console.log("clicked....")
    this.itemView  = this.rentService.getItemById(id);
    this.modalService.open(content,{ariaLabelledBy: 'modal-basic-title',centered: true,size:'lg'});
  }

}
