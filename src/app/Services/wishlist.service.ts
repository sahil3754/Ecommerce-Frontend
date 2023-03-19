import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  wishlistData:Array<any>=[]
  cartlistData:Array<any>=[]
  // wishlistData=new Set()
  
  constructor() { 
    // localStorage.setItem("wishs",JSON.stringify(this.wishlistData))
  }


  get_wish(){
    return JSON.parse(localStorage.getItem("wish") || "[]")
  }

  get_cart(){
    return JSON.parse(localStorage.getItem("cart") || "[]")
  }
}
