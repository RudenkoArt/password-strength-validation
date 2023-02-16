import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PassowordStrengthBarComponent } from './password-strength-bar/password-strength-bar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  password = new FormControl('');

  ngOnInit() {}
}
