import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import AOS from 'aos';

@Component({
  selector: 'app-first-section',
  templateUrl: './first-section.component.html',
  styleUrls: ['./first-section.component.scss'],
})
export class FirstSectionComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    AOS.init();
  }



  scrollToElement(){
document.getElementById('fifthSection').scrollIntoView({
  behavior: 'smooth',
  block: 'start',
  inline: 'nearest',
});
  }
}
