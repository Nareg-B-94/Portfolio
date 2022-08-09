import * as AOS from 'aos';

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-app';
  ngOnInit() {
    AOS.init();
  }


}
