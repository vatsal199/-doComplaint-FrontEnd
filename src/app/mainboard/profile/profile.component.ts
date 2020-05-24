import { Component, OnInit } from '@angular/core';

import { Profile } from '../../models/profile.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userDetails:Profile;
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.userDetails = this.authService.getUserData();
  }

  photoEdit(files:FileList){
    let reader = new FileReader();
    reader.onload = (event:any) => {
      this.userDetails.imgUrl = event.target.result;
      this.authService.photoEdit(this.userDetails.imgUrl);
    };
    
    reader.readAsDataURL(files[0]);
  }

}
