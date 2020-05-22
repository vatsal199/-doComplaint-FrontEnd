import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';

import { Request } from '../../models/request.model';
import { AuthService } from '../../services/auth.service';
import { RequestService } from '../../services/request.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  myView:boolean = false;

  constructor(private modalService: NgbModal,
    private authService:AuthService, 
    private rentService:RequestService) { }

  ngOnInit(): void {
  }

  changeView(){
    this.myView = !this.myView;
    //console.log("function call");
  }

  onAdd(content){
    console.log('Item added');
    open(content);
  }

  open(content) {

    this.modalService.open(content,{ariaLabelledBy: 'modal-basic-title',centered: true}).result.then(
      (result:NgForm ) => {
      //console.log(result.form.value);
      //let enId = this.authService.getEnrollId();
      //let moNo = this.authService.getMobileNumber();
      let newItem:Request = {
        id : 10,
        title : result.form.value.title,
        shortDesc : result.form.value.sDesc,
        imgUrl : result.form.value.url,
        enrollNo : this.authService.getEnrollId(),
        mobilenumber : this.authService.getMobileNumber()
      };
      console.log(newItem);
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
