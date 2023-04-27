import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/interfaces/Product';
import { ProductService } from '../product.service';
import { Category } from 'src/interfaces/Category';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css'],
})
export class TablaComponent {
  products: Product[] = [];
  categories: Category[] = [];
  category: any = '';

  @Input('newProduct') newProduct: Product = {
    id: 0,
    title: '',
    description: '',
    price: 0,
    thumbnail: '',
  };

  @Output()
  onNewProduct: EventEmitter<Product> = new EventEmitter();

  constructor(private productService: ProductService) {
    this.getProducts();
    this.getCategory();
  }

  async getProducts() {
    return (this.products = await this.productService.getProducts());
  }

  async deleteProduct(id: number) {
    await this.productService.deleteProduct(id);
    this.products = this.products.filter((product) => product.id !== id);
    console.log(this.products);
  }

  async editProduct(id: number) {

    let prod = await this.productService.getProduct(id);
    this.newProduct.id = await prod.id
    this.newProduct.title= prod.title
    this.newProduct.price= prod.price
    this.newProduct.description= prod.description
    this.newProduct.thumbnail= prod.thumbnail

    this.products.push(this.newProduct)


  }

  addProduct(): void {
    if (this.newProduct.title.length === 0) {
      return;
    }
    let prod = this.productService.getProducts.length
    this.newProduct.id=prod
    this.onNewProduct.emit(this.newProduct);

    this.productService.addProduct(this.newProduct);
    this.products.push(this.newProduct);
    console.log(this.products);


    // this.newProduct.title = '';
    // this.newProduct.price = 0;
    // this.newProduct.description = '';
    // this.newProduct.thumbnail = '';
  }

  async buscar(q: string) {
      return this.products = await this.productService.buscar(q);
  }

  async getCategory() {
     return this.categories = await this.productService.getCategory();
  }


  async getOneCategory(cat: string) {
    return this.products = await this.productService.getOneCategory(cat);
  }

}
