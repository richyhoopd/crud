import { Component } from '@angular/core';
import { Product } from 'src/interfaces/Product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  product: Product = {
    id: 0,
    title: '',
    description: '',
    price: 0,
    thumbnail: ''
  };

  onNewProduct( product: Product): void {
    console.log('pagina principal');
    console.log(product);
    this.product = product;
  }
}
