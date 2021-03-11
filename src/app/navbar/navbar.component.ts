import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
isUser:boolean=false;
  constructor(private auth:AuthService,private router:Router) { 
this.auth.user.subscribe(user=>{
  if(user)
  {
    this.isUser=true;
  }
  else{
    this.isUser=false;
  }
})

  }

  ngOnInit(): void {
  }
  logout()
  {
      this.auth.Logout().then(()=>{
console.log('Signout Success');
localStorage.removeItem("userConnect")
this.router.navigate(['/login']);

      }).catch(()=>{
console.log('SignOut Failed');
      })
  }

}
