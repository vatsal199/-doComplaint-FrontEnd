import { Injectable } from '@angular/core';
import { CanActivate,ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { AuthService } from './auth.service';

// @Injectable()

@Injectable({
  providedIn: 'root'
})

export class AuthGuardService implements CanActivate{

  constructor(
    private router:Router,
    private authService:AuthService 
  ) { }

  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):boolean{
    if(this.authService.isAuthanticated())
      return true;
    else{
      this.authService.loadSideBar.next(false);
      this.router.navigate(['/stlogin']);
      return false;
    }
  }
}
