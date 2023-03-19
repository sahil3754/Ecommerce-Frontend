import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from '../Services/user-auth.service';
import { UsersService } from '../Services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  UserData:any=[]


  constructor(private user:UsersService ,private auth:UserAuthService,private route:Router) { 
   
  }

  ngOnInit(): void {
  }

  logout(){
    this.auth.clear();
    this.route.navigate(["/"])
  }


  get_email(){
   return this.user.get_email()
  }
  get_name(){
   return this.user.get_name()
  }


}
