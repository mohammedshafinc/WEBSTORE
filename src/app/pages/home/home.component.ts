import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl:'./home.component.html' ,
  
})
export class HomeComponent implements OnInit {

  cols = 3

  category: string | undefined;

  ngOnInit(): void {
      
  }

  oncolumnscountchange(colsnum:number):void{

    this.cols = colsnum

  }

  onshowcategory ( newcategory :string) :void{

    this.category = newcategory

  }

}
