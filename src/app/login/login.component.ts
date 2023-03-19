import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from '../Services/user-auth.service';
import { UsersService } from '../Services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private user:UsersService,private auth:UserAuthService,private router:Router) { }

  ngOnInit(): void {
  }

  userName:any=new FormControl("",[
    Validators.email,
    Validators.required

  ])
  
  userPassword:any=new FormControl("",[
    Validators.required

  ])
  

  login=new FormGroup({
    userName:this.userName,
    userPassword:this.userPassword
  })
  

  
 
  Login(){
    
    this.user.login(this.login.value).subscribe(
      (response:any)=>{
        this.auth.setRoles(response.user.role);
       
        
        localStorage.setItem("email",response.user.userName)
        localStorage.setItem("name",response.user.userFullName)
      
        
        
        const role = response.user.role[0].roleName;
        if (role === 'Admin') {
          
          this.router.navigate(['/products']);

        } else {
          this.router.navigate(['/']);
          
        
          
        }
      },
      (error)=>{
        console.log(error);
      }
    )


   
  }

 
   
}


