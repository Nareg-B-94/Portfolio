import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import AOS from 'aos';

@Component({
  selector: 'app-third-section',
  templateUrl: './third-section.component.html',
  styleUrls: ['./third-section.component.scss'],
})
export class ThirdSectionComponent implements OnInit {
  private router: Router;
  constructor() {}

  ngOnInit(): void {
     AOS.init();
  }

  goToPolloOnline() {
    window.open('https://nareg-berberian.com/projects/elpollolocco/index.html');
  }

  goToPolloGit() {
    window.open('https://github.com/Nareg-B-94/El-Pollo-Locco');
  }

  goToKanbanOnline() {
    window.open('https://nareg-berberian.com/projects/kanban/#/');
  }

  goToKanbanGit() {
    window.open('https://github.com/Nareg-B-94/Kanban-with-Angular');
  }

  goToRoFOnline() {
    window.open('https://nareg-berberian.com/projects/rof/#/');
  }

  goToRoFGit() {
    window.open('https://github.com/Nareg-B-94/Ring-of-Fire-v2');
  }

  goToQuandlOnline() {
    window.open('https://nareg-berberian.com/projects/bitcoin/index.html');
  }

  goToQuandlGit() {
    window.open('https://github.com/Nareg-B-94/BitCoin-currency-Projekt');
  }

  goToCrmOnline() {
    window.open('https://nareg-berberian.com/projects/simplecrm/');
  }

  goToCrmGit() {
    window.open('https://github.com/Nareg-B-94/simple-CRM');
  }
}
