import { Component, OnInit } from '@angular/core';
import { concat } from 'rxjs';
import { WishlistService } from '../Services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
   a=true;
   b=false;
  constructor(private wish:WishlistService) {
   
    this.isEmpty()
   }

  ngOnInit(): void {
  }


  wishlist():any{
    
 
   return this.wish.get_wish()
   
    
  }

  isEmpty(){
   
    if (this.wishlist().length==0) {
      this.a=false
      this.b=true
    } else {
      this.a=true
      this.b=false

      
    }
   
  }



}
