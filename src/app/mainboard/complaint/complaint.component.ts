import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ComplaintDataService } from '../../services/complaint-data.service';
import { Complaint } from '../../models/complaint.model';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.css']
})
export class ComplaintComponent implements OnInit {

  complaints:Complaint[];

  constructor(private complaintDataService:ComplaintDataService) { }

  ngOnInit(): void {
    this.complaints = this.complaintDataService.getData();
  }

  changeStatus(id:any){
      this.complaintDataService.changeStatus(id);
  }

  onAdd(form:NgForm){
    let newData:Complaint = {
        id:3,
        timestamp:'12345',
        username:'vatsal',
        roomnumber:'479',
        mobilenumber:'9537517274',
        issue:'room',
        status:'Unresolved'
    };
    newData.issue = form.value.complaint;
    this.complaintDataService.onAdd(newData);
  }

}
