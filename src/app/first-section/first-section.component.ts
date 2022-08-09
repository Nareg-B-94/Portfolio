import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-section',
  templateUrl: './first-section.component.html',
  styleUrls: ['./first-section.component.scss'],
})
export class FirstSectionComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goTo5thSection() {
    this.router.navigate(['/#fifthSection']);
  }
}
