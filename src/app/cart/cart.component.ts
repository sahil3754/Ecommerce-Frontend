import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../Services/wishlist.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  a = true;
  b = false;
  price=0;
 
  constructor(private wish: WishlistService) { 
    this.total()
  }

  ngOnInit(): void {
    this.isEmpty()
  }



  cart(): any {


    return this.wish.get_cart()


  }

  isEmpty() {

    if (this.cart().length == 0) {
      this.a = false
      this.b = true
    } else {
      this.a = true
      this.b = false


    }

  }


  total(){
    for (let index = 0; index < this.wish.get_cart().length; index++) {
      
        
        this.price+=this.wish.get_cart()[index].price
      }    
    
    
  }



}
