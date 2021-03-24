import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {
  title = 'Contact';
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  constructor() {
  }

  ngOnInit(): void {
  }
}
