import { FoodService } from './../../food.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

interface Pizza {
  name: string,
  price: number
}

export function pizzaFactory(http){
  return new FoodService(http, '/pizzas');
}


@Component({
  selector: 'app-pizza-viewer',
  template: `<div>
  <div *ngFor="let item of items$ | async">
    {{ item.name }} {{ item.price | currency:'USD':true }}
  </div>
</div>`,
  providers: [
    {provide: FoodService, useFactory: pizzaFactory, deps: [HttpClient]}
  ]
})
export class PizzaViewerComponent implements OnInit {

  items$: Observable<Pizza[]>;
  constructor(private foodService: FoodService) {}
  ngOnInit() {
    this.items$ = this.foodService.getFood();
  }

}
