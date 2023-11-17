import { Component ,OnDestroy,OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { StoreService } from 'src/app/services/store.service';
 
const  rows_heigth : { [id: number]: number} = { 1 : 400 , 3 : 335 , 4:350};

@Component({
  selector: 'app-home',
  templateUrl:'./home.component.html' ,
  
})
export class HomeComponent implements OnInit, OnDestroy {

  cols = 3
  rowHeight = rows_heigth[this.cols]



  constructor ( private cartservice:CartService , private storeService : StoreService){}

  category: string | undefined;
  products:Array<product> | undefined;
  sort = 'desc';
  count = '12';
  productsSubscription: Subscription | undefined


  ngOnInit(): void {

    this.getProducts();
      
  }


  getProducts() : void{
   this.productsSubscription = this.storeService.getAllProducts(this.count,this.sort , this.category).subscribe((_products) => {
      this.products = _products
    });

  }

  oncolumnscountchange(colsnum:number):void{

    this.cols = colsnum
    this.rowHeight = rows_heigth[this.cols];

  }

  onshowcategory ( newcategory :string) :void{

    this.category = newcategory 
    this.getProducts();

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

  onitemsCountChange( newCount : number) :void{

      this.count = newCount.toString();

      this.getProducts();

  }

  onsortChange(newsort :string) : void{

    this.sort = newsort;
    this.getProducts();


  }


  ngOnDestroy(): void {
      if (this.productsSubscription) {

        this.productsSubscription.unsubscribe();
        
      }
  }

}
