import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-imprint',
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss']
})
export class ImprintComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
