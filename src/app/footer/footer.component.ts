import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import AOS from 'aos';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit(): void {
     AOS.init();
  }
  goToImprint() {
    this.router.navigate(['/imprint']);

    setTimeout(() => {
      this.scrollToImprint();
    }, 300);

  }
  goToLegal() {
    this.router.navigate(['/legal-notice']);

    setTimeout(() => {
      this.scrollToLegal();
    }, 300);
  }

  scrollToImprint(){
document.getElementById('imprint').scrollIntoView({
  behavior: 'smooth',
  block: 'start',
  inline: 'nearest',
});
  }

  scrollToLegal(){
document.getElementById('legal').scrollIntoView({
  behavior: 'smooth',
  block: 'start',
  inline: 'nearest',
});
  }
}


