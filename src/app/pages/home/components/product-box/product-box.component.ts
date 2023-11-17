import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html'
})
export class ProductBoxComponent  implements OnInit{

  @Input() fullwidthmode = false;

  @Input() product : product | undefined 

  @Output() addToCart = new EventEmitter();

  constructor () {}

  



  ngOnInit(): void {
      
  }


  onAddToCart() : void{
    

    this.addToCart.emit(this.product);
    

  }

}
