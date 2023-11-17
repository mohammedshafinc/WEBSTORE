import { Component ,OnInit} from '@angular/core';
import { product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
 
const  rows_heigth : { [id: number]: number} = { 1 : 400 , 3 : 335 , 4:350};

@Component({
  selector: 'app-home',
  templateUrl:'./home.component.html' ,
  
})
export class HomeComponent implements OnInit {

  cols = 3
  rowHeight = rows_heigth[this.cols]



  constructor ( private cartservice:CartService){}

  category: string | undefined;

  ngOnInit(): void {
      
  }

  oncolumnscountchange(colsnum:number):void{

    this.cols = colsnum
    this.rowHeight = rows_heigth[this.cols];

  }

  onshowcategory ( newcategory :string) :void{

    this.category = newcategory

  }

  onAddToCart(product: product) :void{

    this.cartservice.addToCart({
      product : product.image,
      name:product.title,
      price:product.price,
      quantity:1,
      id:product.id
    })

    

  }

}
