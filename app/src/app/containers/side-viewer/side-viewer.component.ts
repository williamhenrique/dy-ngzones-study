import { FoodService } from './../../food.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

interface Side {
  name: string,
  price: number
}

export function sideFactory(http){
  return new FoodService(http, '/sides');
}

// for useExist
export abstract class SideClass{
  getFood: () => Observable<Side[]>;
}

@Component({
  selector: 'app-side-viewer',
  template: `
   <div>
      <div *ngFor="let item of items$ | async">
        {{ item.name }} {{ item.price | currency:'USD':true }}
      </div>
    </div>
  `,
  providers: [
    {provide: FoodService, useFactory: sideFactory, deps: [HttpClient]},
  ]
})
export class SideViewerComponent implements OnInit {

  items$: Observable<Side[]>;
  constructor(private foodService: FoodService) {}
  ngOnInit() {
    this.items$ = this.foodService.getFood();
  }

}
