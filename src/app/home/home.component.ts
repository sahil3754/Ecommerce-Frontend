import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../Services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private user:UsersService,private route:Router) { }

  ngOnInit(): void {
  }

  check_login(){
    if (this.user.isAuthenticate()) {
      this.route.navigate(["/products"])
    } else {
      this.route.navigate(["/login"])
    }
  }
}
