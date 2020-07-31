import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DrinkViewerComponent } from './containers/drink-viewer/drink-viewer.component';
import { PizzaViewerComponent } from './containers/pizza-viewer/pizza-viewer.component';
import { SideViewerComponent } from './containers/side-viewer/side-viewer.component';
import { API_TOKEN } from './token';

@NgModule({
  declarations: [
    AppComponent,
    DrinkViewerComponent,
    PizzaViewerComponent,
    SideViewerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    // { provide: API_TOKEN , useValue: '/pizzas' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
