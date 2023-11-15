import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html'
})
export class ProductBoxComponent  implements OnInit{

  @Input() fullwidthmode = false;
h: any;
px: any;


  ngOnInit(): void {
      
  }

}
