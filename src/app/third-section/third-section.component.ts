import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-third-section',
  templateUrl: './third-section.component.html',
  styleUrls: ['./third-section.component.scss'],
})
export class ThirdSectionComponent implements OnInit {
  private router: Router;
  constructor() {}

  ngOnInit(): void {}

  goToPolloOnline() {
    window.open('https://nareg-b-94.github.io/El-Pollo-Locco/');
  }

  goToPolloGit() {
    window.open('https://github.com/Nareg-B-94/El-Pollo-Locco');
  }

  goToKanbanOnline() {}

  goToKanbanGit() {}

  goToRoFOnline() {}

  goToRoFGit() {}

  goToQuandlOnline() {
    window.open('https://nareg-b-94.github.io/BitCoin-currency-Projekt/');
  }

  goToQuandlGit() {
    window.open('https://github.com/Nareg-B-94/BitCoin-currency-Projekt');
  }

  goToCrmOnline() {}

  goToCrmGit() {}
}
