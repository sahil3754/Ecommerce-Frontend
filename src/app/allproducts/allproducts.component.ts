import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsServiceService } from '../Services/products-service.service';
import { UsersService } from '../Services/users.service';
import { WishlistService } from '../Services/wishlist.service';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent implements OnInit {
  data: Array<any> = [];
  constructor(private products: ProductsServiceService, private Wish: WishlistService, private user: UsersService, private route: Router) {
    this.get_products()
  }

  ngOnInit(): void {

  }



  get_products() {
    this.products.get_products()
      .subscribe((data: any) => {
        this.data = data


      })

  }


  program_overview(title: any, description: any, price: any, image: any) {
    const data: any = [{
      title: title,
      description: description,
      price: price,
      image: image
    }]

    return this.products.data = data;

  }



  wishlist(title: string, price: string, image: string, stock: string) {
    if (this.user.isAuthenticate()) {
      const wish_arr = {
        title: title,
        price: price,
        image: image,
        stock: stock
      }
      this.Wish.wishlistData.push(wish_arr)
      localStorage.setItem("wish", JSON.stringify(this.Wish.wishlistData))

    }
    else {

      this.route.navigate(["/login"])
    }


  }


  Addcart(title: string, price: string, image: string, stock: string) {
    if (this.user.isAuthenticate()) {


      const wish_arr = {
        title: title,
        price: price,
        image: image,
        stock: stock
      }
      this.Wish.cartlistData.push(wish_arr)
      localStorage.setItem("cart", JSON.stringify(this.Wish.cartlistData))
    }
    else {
      this.route.navigate(["/login"])
    }


  }




}
