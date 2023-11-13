import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  
})
export class ProductsHeaderComponent implements OnInit{

  @Output() columnscountchange = new EventEmitter<number>();

  sort = 'desc';
  itemsshowcount = 12;

  constructor(){}

  ngOnInit(): void {
      
  }

  onsortupdated(newsort :string) : void{

    this.sort = newsort

  }

  onitemsupdated( count : number) : void{

    this.itemsshowcount = count

  }

  oncolumsupdated(colsnum:number) : void {

    this.columnscountchange.emit(colsnum);

  }

}
