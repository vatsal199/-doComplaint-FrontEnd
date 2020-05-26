import { Component,OnInit,OnDestroy } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy{
  title = 'complaint';
  studentLoggedIn:boolean = false;
  sidebarSubscription: Subscription;

  constructor(private authService:AuthService){
    // let rollnumber = sessionStorage.getItem("rollnumber");
    //   if(rollnumber != "loggedout")
    //     this.studentLoggedIn = true;
  }

  ngOnInit(){
      this.authService.loadSideBar.subscribe(
        (val:boolean) => this.studentLoggedIn = val
      );
  }
  ngOnDestroy(){
    this.sidebarSubscription.unsubscribe();
  }
}
