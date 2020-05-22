import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import * as Feather from 'feather-icons';

import { Rent } from '../../models/rent.model';
import { AuthService } from '../../services/auth.service';
import { RentService } from '../../services/rent.service';

@Component({
  selector: 'app-trades',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css']
})
export class RentComponent implements OnInit {
  
  myView:boolean = false;
  uploadedImage;

  constructor(private modalService: NgbModal,
     private authService:AuthService, 
     private rentService:RentService) { }

  ngOnInit(): void {
    
  }

  changeView(){
      this.myView = !this.myView;
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
          let newItem:Rent = {
              id : 10,
              title : result.form.value.title,
              shortDesc : result.form.value.sDesc,
              description : result.form.value.desc,
              imgUrl :this.uploadedImage,
              rent : +result.form.value.rent,
              enrollNo : this.authService.getEnrollId(),
              mobilenumber : this.authService.getMobileNumber()
          };
          //console.log(newItem);
          this.rentService.addItem(newItem);
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
