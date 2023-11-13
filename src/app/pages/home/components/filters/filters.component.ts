import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl:'./filters.component.html' 
})
export class FiltersComponent implements OnInit{

  @Output () showcategory = new EventEmitter<string>();

  categories = ['shoes','sports']

  constructor () {}

  ngOnInit(): void {
      
  }

  onshowcategory (categ:string) :void {

    this.showcategory.emit(categ)



  }

}
