import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  showFiller = false;
  constructor() {}

  ngOnInit(): void {
     AOS.init();
  }
}
