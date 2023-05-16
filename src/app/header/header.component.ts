import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
    `
      .active {
        background-color: rgb(224, 224, 224);
      }
    `,
  ],
})
export class HeaderComponent {}
