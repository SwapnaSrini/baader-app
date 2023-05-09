//service for getUsers and getProducts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  rootUserURL = 'https://64511fb5e1f6f1bb22a8b895.mockapi.io/api/v1';
  rootProductURL = 'https://fakestoreapi.com';
  getUsers() {
    return this.http.get(this.rootUserURL + '/users');
  }
  getProducts(){
    return this.http.get(this.rootProductURL + '/products');
  }
}
