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

async getProduct(id: number) {
 let product = await fetch(`https://dummyjson.com/products/${id}`)
.then(res => res.json())
return product

}

editProducts (product: Product) {
  fetch(`https://dummyjson.com/products/${product.id}`, {
  method: 'PUT', /* or PATCH */
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    product
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
return product ;
}

async deleteProduct(id: number) {
  let products = await fetch(`https://dummyjson.com/products/${id}`, {
  method: 'DELETE',
})
.then(res => res.json())
.then(console.log);
}

async buscar(q: string) {
  const response = await fetch(`https://dummyjson.com/products/search?q=${q}`);
  const data = await response.json();
  console.log(data.products)
  return data.products;
};


async getCategory() {
  const response = await fetch('https://dummyjson.com/products/categories');
  const categories = await response.json();
  console.log(categories);
  return categories;
}

async getOneCategory(cat: string) {
 const repsonse = await fetch(`https://dummyjson.com/products/category/${cat}`)
 const category = await repsonse.json();
 console.log(category);
 return category.products;

}



  constructor() { }
}
