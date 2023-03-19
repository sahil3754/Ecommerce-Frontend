import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  username:string="";
  userfullname!:string;
  private userid:string="user is not log in";
  PATH_OF_API = 'http://localhost:9090';
  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });
  constructor(private http:HttpClient) { }

  get_userid(){
    return this.userid;
  }
  
  isAuthenticate(){
    const uid=localStorage.getItem("userID");
    if(uid) this.userid=uid;
    return uid ? true:false
  }
 
  

  login(loginData:any){
    localStorage.setItem("userID",loginData)
   
    return this.http.post(this.PATH_OF_API+'/authenticate',loginData,{
      headers:this.requestHeader,
    
    })
  }


  register(registerData:any){
    return this.http.post(this.PATH_OF_API+"/registerNewUser",registerData)
  }
  


  get_email(){
    
   return localStorage.getItem("email")
  }
  get_name(){
    
   return localStorage.getItem("name")
  }


}
