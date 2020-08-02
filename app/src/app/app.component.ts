import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styles: [`
    app-pizza-viewer,
    app-side-viewer,
    app-drink-viewer {
      display: block;
      border-bottom: 2px solid #eee;
      padding: 20px 0;
    }
  `],
  template: `
    <div>
      <app-pizza-viewer></app-pizza-viewer>
      <app-side-viewer></app-side-viewer>
      <app-drink-viewer></app-drink-viewer>
      <app-stock></app-stock>
    </div>
    `,
})
export class AppComponent {
  title = 'app';
}
