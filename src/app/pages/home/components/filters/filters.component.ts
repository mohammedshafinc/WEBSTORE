import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-filters',
  templateUrl:'./filters.component.html' 
})
export class FiltersComponent implements OnInit,OnDestroy{

  @Output () showcategory = new EventEmitter<string>();
  categoriesSubscription : Subscription | undefined

  categories : Array<string> | undefined

  constructor ( private storeService:StoreService) {}

  ngOnInit(): void {

   this.categoriesSubscription =  this.storeService.getAllCategories().subscribe((response)=>{
      this.categories = response
    });
      
  }

  onshowcategory (categ:string) :void {

    this.showcategory.emit(categ)

  }

  ngOnDestroy(): void {
      if (this.categories){
        this.categoriesSubscription?.unsubscribe()
      }
  }

}
