import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  loginCheck:boolean=true;
  private userid:string="user is not log in";


  constructor() { }

 

  public setRoles(roles: []) {
    localStorage.setItem('roles', JSON.stringify(roles));
  }

 public getRoles():[]  {
    return JSON.parse(localStorage.getItem('roles')||"{}");
    
  }

  public setToken(jwtToken: string) {
    localStorage.setItem('jwtToken', jwtToken);
  }

  public getToken(): any {
    return localStorage.getItem('jwtToken');
  }

  public clear() {
    localStorage.clear();
  }

  public isLoggedIn() {
    return this.getRoles() && this.getToken();
  }

  
}
