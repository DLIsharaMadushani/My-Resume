import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.sass']
})
export class InterestComponent implements OnInit {
  @Input() img: string;
  @Input() interest: string;

  constructor() { }

  ngOnInit(): void {
  }

}
