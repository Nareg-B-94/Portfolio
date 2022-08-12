import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-fifth-section',
  templateUrl: './fifth-section.component.html',
  styleUrls: ['./fifth-section.component.scss'],
})
export class FifthSectionComponent implements OnInit {
  message: any;
  email: any;
  name: any;
  toJSON: any = {
    name: 'name',
    email: 'email',
    message: 'message',
  };
  getform: FormGroup;
  endPoint: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.endPoint = 'https://sebastian-gamroth.developerakademie.net/portfolio/send_mail.php';
    this.getform = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      message: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }

  submit() {
    console.log(this.getform.value);
    this.toJSON = this.getform.value;
    this.toPHP();
    this.getform.reset();
  }

  toPHP() {
    this.http.post(this.endPoint, this.toJSON).subscribe(
      (response) => console.log(response),
      (response) => console.log(response)
    );
  }
}
