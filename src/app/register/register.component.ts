import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../Services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private user:UsersService,private route:Router) { }

  ngOnInit(): void {
  }


  userFullName:any=new FormControl("",[
    Validators.required
  ])

  userName:any=new FormControl("",[
    Validators.required,
    Validators.email
  ])

  userPassword:any=new FormControl("",[
    Validators.required
  ])

  confirmpassword:any=new FormControl("",[
    Validators.required
  ])



  register=new FormGroup({
    userFullName:this.userFullName,
    userName:this.userName,
    userPassword:this.userPassword,
    confirmpassword:this.confirmpassword
  })


  match_confirm_password():boolean{
    return this.userPassword.value==this.confirmpassword.value
  }




  Register(){
    const data:any={
      userName:this.userName.value,
      userFullName:this.userFullName.value,
      userPassword:this.userPassword.value,
    }

    this.user.register(data).subscribe(
      (response:any)=>{
       this.route.navigate(["/login"])
      },
      (error)=>{
        console.log(error)
      }
    )
  
    // this.user.add_user(data).toPromise();
    // console.log(this.register.value)

    
   

  }




}
