import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-fourth-section',
  templateUrl: './fourth-section.component.html',
  styleUrls: ['./fourth-section.component.scss']
})
export class FourthSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
     AOS.init();
  }

}
