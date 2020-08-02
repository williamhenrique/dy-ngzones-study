import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockComponent } from './stock/stock.component';
import { StockService } from './stock.service';



@NgModule({
  declarations: [StockComponent],
  exports: [
    StockComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    StockService,
    {provide: StockService, useValue: [{storeId: 1234, storeToken: '12nndhhhye6643555'}]}
  ]
})
export class StockModule { }
