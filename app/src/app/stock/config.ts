import { InjectionToken } from '@angular/core';

export interface StockStoreConfig {
  storeId: number,
  storeToken: string
}

export const STOCK_STORE_CONFIG = new InjectionToken<StockStoreConfig>('STOCK_STORE_CONFIG');
