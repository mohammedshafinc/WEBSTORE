import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  
})
export class ProductsHeaderComponent implements OnInit{

  @Output() columnscountchange = new EventEmitter<number>();
  @Output() itemsCountChange = new EventEmitter<number>();
  @Output() sortChange = new EventEmitter<string>();

  

  sort = 'desc';
  itemsshowcount = 12;

  constructor(){}

  ngOnInit(): void {
      
  }

  onsortupdated(newsort :string) : void{

    this.sort = newsort
    this.sortChange.emit(newsort);

  }

  onitemsupdated( count : number) : void{

    this.itemsshowcount = count;
    this.itemsCountChange.emit (count)

  }

  oncolumsupdated(colsnum:number) : void {

    this.columnscountchange.emit(colsnum);

  }

}
