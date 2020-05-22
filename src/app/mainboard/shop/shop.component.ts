import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import * as Feather from 'feather-icons';

import { Shop } from '../../models/shop.model';
import { AuthService } from '../../services/auth.service';
import { ShopService } from '../../services/shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  myView:boolean = false;
  uploadedImage;
  
  constructor(private modalService: NgbModal,
    private authService:AuthService, 
    private shopService:ShopService) { }

  ngOnInit(): void {
  }

  changeView(){
    this.myView = !this.myView;
    //console.log("function call");
  }

  onBrowseClick(fileUpload:HTMLInputElement){
    fileUpload.click();
  }

  updateFile(files:FileList,filePathView:HTMLInputElement){

      let reader = new FileReader();
      filePathView.value = files[0].name;

      reader.onload = (event:any) => {
        this.uploadedImage = event.target.result;
      };
      
      reader.readAsDataURL(files[0]);
  }

  open(content) {
    setTimeout (() => {Feather.replace();}, 70);

    this.modalService.open(content,{ariaLabelledBy: 'modal-basic-title',centered: true}).result.then(
      (result:NgForm ) => {
      let newItem:Shop = {
        id : 10,
        title : result.form.value.title,
        shortDesc : result.form.value.sDesc,
        description : result.form.value.desc,
        imgUrl :this.uploadedImage,
        price : +result.form.value.price,
        enrollNo : this.authService.getEnrollId(),
        mobilenumber : this.authService.getMobileNumber()
    };
      //console.log(newItem);
      this.shopService.addItem(newItem);
    }, (reason) => {
      console.log(this.getDismissReason(reason));
    });

  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
