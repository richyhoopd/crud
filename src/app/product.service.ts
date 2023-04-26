import { Injectable } from '@angular/core';
import { Product } from 'src/interfaces/Product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

async getProducts () {
  let productos = await fetch('https://dummyjson.com/products')
.then(res => res.json());
console.log(productos);
return productos.products;

}

editProducts (id: number) {
  fetch(`https://dummyjson.com/products/${id}`, {
  method: 'PUT', /* or PATCH */
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: 'iPhone Galaxy +1'
  })
})
.then(res => res.json())
.then(console.log);
}

async addProduct(product: Product) {
  fetch('https://dummyjson.com/products/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(product)
})
.then(res => res.json());
console.log(product)
return product;
}

async deleteProduct(id: number) {
  let products = await fetch(`https://dummyjson.com/products/${id}`, {
  method: 'DELETE',
})
.then(res => res.json())
.then(console.log);
}

  constructor() { }
}
