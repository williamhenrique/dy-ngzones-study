import { NgModule, ModuleWithProviders, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockComponent } from './stock/stock.component';
import { StockService } from './stock.service';
import { StockStoreConfig, STOCK_STORE_CONFIG } from './config';

export const STOCK_PROVIDERS: Provider[] = [
  StockService
];

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
export class StockModule {

  static forRoot(config: StockStoreConfig): ModuleWithProviders {
    return {
      ngModule: StockModule,
      providers: [
        STOCK_PROVIDERS,
        {
          provide: STOCK_STORE_CONFIG,
          useValue: config
        }
      ]
    };
  }

}
