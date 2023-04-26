import { Component, ElementRef, ViewChild, EventEmitter} from '@angular/core';
import { Product } from 'src/interfaces/Product';
import { ProductService } from '../product.service';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent  {

  @ViewChild('txtTitle') txtTitle!: ElementRef<HTMLInputElement>;
  @ViewChild('txtDescription') txtDescription!: ElementRef<HTMLInputElement>;
  @ViewChild('txtPrice') txtPrice!: ElementRef;
  @ViewChild('txtThumbnail') txtThumbnail!: ElementRef<HTMLInputElement>;

  constructor(private productService: ProductService) {}

  onNewProduct: EventEmitter<Product> = new EventEmitter();

  public newProduct: Product = {
    id: 0,
    title: '',
    price: 0,
    description: '',
    thumbnail: ''
  }

  addProduct():void {
    if ( this.newProduct.title.length === 0) { return; }

    this.onNewProduct.emit(this.newProduct)


    this.productService.addProduct(this.newProduct);

    this.newProduct.title = '';
    this.newProduct.price = 0;
    this.newProduct.description = '';
    this.newProduct.thumbnail = '';

  }




    // if ( this.product.title.trim().length === 0 ) { return; }

    // // this.onNuevoPersonaje.emit( this.nuevo );

    // // this.onNuevoPersonaje.emit(this.nuevo);

    // this.dbzService.agregarPersonaje( this.nuevo );

    // this.nuevo = {
    //   nombre: '',
    //   poder: 0
    // }
}
