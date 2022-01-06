import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }

  addProduct(product){
    return this.http.post<any> (`https://ty-shop-token.herokuapp.com/api/products`,product)
  }



}
