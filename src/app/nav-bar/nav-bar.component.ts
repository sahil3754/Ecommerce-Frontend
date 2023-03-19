import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from '../Services/user-auth.service';
import { UsersService } from '../Services/users.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {


  constructor(private user:UsersService,private auth:UserAuthService,private route:Router) { }

  ngOnInit(): void {
  }
  

  Main_btn(){
    if (this.user.isAuthenticate()) {
      
      return this.route.navigate(["/user"])
    }
    else {
      return this.route.navigate(["/login"])
     
 }
    
  }

  check_login(){
    if(this.user.isAuthenticate()){
      return true;
    }
    else{
      return false;
    }
  }
 



}
