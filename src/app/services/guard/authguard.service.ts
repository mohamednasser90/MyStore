import { AuthService } from './../auth.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, RouterModule, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {
//should br noauthguard
  constructor(private as:AuthService,private route:Router) { }
  canActivate(aroute:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean|Observable<boolean>|Promise<boolean>
  {
    return new Promise(resolve=>{
this.as.user.subscribe(user=>{
  if(user)
  {
    resolve(true)
  }
  else{
    this.route.navigate(['/']);
    resolve(false);
  }
})
    })
  }
}
