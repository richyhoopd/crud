import { Component } from '@angular/core';
import { Product } from 'src/interfaces/Product';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {

  products: Product[] = [];

  lenghtt() {
    return this.products.length+1;
  }

  constructor (private productService: ProductService) {
    this.getProducts();
  }

  async getProducts() {
    return this.products = await this.productService.getProducts();
  }

  async deleteProduct(id: number) {

await this.productService.deleteProduct(id);
this.products = this.products.filter(product => product.id !== id);
 console.log(this.products);

  }

  addProduct(product: any) {
    
  } 

}

// return this.products = await this.productService.deleteProduct(id);



