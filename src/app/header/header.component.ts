import { Component, OnInit } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  showFiller = false;
  constructor() {}

  ngOnInit(): void {}
}
