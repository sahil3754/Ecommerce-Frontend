import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  constructor(private http:HttpClient) { }

  data:any=[]

  get_products(){

    return this.http.get("http://localhost:3000/allproducts");

  }

  program_overview(){

    return this.data;

  }

}
