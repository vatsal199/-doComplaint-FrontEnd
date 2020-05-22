import { Injectable } from '@angular/core';
import { Complaint } from '../models/complaint.model';

@Injectable({
  providedIn: 'root'
})

export class ComplaintDataService {

  private complaintsList:Complaint[] = [
    {
      id:1,
      timestamp:'12345',
      username:'vatsal',
      roomnumber:'479',
      mobilenumber:'9537517274',
      issue:'room',
      status:'Unresolved'
    },
    {
      id:2,
      timestamp:'12345',
      username:'vatsal',
      roomnumber:'479',
      mobilenumber:'9537517274',
      issue:'room',
      status:'Unresolved'
    }

  ];
  
  constructor() { }

  getData(){
    return this.complaintsList;
  }

  changeStatus(id:number){
    console.log(id);
    for(let i=0;i<this.complaintsList.length;i++){
        if(this.complaintsList[i].id == id){
            if(this.complaintsList[i].status == 'Unresolved')
                this.complaintsList[i].status = 'Resolved';
            else
            this.complaintsList[i].status = 'Unresolved';
            break;
        }
    }
  }

  onAdd(newData:Complaint){
    this.complaintsList.push(newData);
    console.log(newData);
  }
}
