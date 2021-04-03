import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SendMessageService} from '../../sevice/send-message.service';
import {HttpParams} from '@angular/common/http';

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
  name: string;
  from: string;
  subject: string;
  msg: string;

  constructor(public messageService: SendMessageService) {

  }

  ngOnInit(): void {
  }

  sendMessage(): void {
    const message = 'Name : ' + this.name + ' From : ' + this.from + ' Message : ' + this.msg;
    this.messageService.sendMessage(this.subject, message).subscribe(
      value => {
          alert('Message sent succefully');
        },
      error => {
        alert('Message sending failed. Please try again');
      });
  }
}
