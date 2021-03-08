import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit(): void {
  }
  logout()
  {
      this.auth.Logout().then(()=>{
console.log('Signout Success');
this.router.navigate(['/login']);

      }).catch(()=>{
console.log('SignOut Failed');
      })
  }

}
