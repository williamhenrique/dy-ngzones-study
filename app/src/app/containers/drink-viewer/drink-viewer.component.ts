import { FoodService } from './../../food.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MockService } from '../../mock.service';
import { HttpClient } from '@angular/common/http';

interface Drink {
  name: string,
  price: number
}

export function drinkFactory(http){
  return new FoodService(http, '/drinks');
}


@Component({
  selector: 'app-drink-viewer',
  template: `
      <div>
      <div *ngFor="let item of items$ | async">
        {{ item.name }} {{ item.price | currency:'USD':true }}
      </div>
    </div>` ,
   providers: [
    {provide: FoodService, useFactory: drinkFactory, deps: [HttpClient]}
  ]
})
export class DrinkViewerComponent implements OnInit {

  items$: Observable<Drink[]>;
  constructor(private foodService: FoodService) {}
  ngOnInit() {
    this.items$ = this.foodService.getFood();
  }

}
