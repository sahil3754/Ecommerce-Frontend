import { Component, OnInit } from '@angular/core';
import { ProductsServiceService } from '../Services/products-service.service';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.css']
})
export class ProductOverviewComponent implements OnInit {
  data:any=[]
  constructor(private product:ProductsServiceService) { 
    this.data=product.data
    console.log(this.data)
   
    
    
  }

  ngOnInit(): void {
   
  }
 

  
}
