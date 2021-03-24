import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-timeline-date',
  templateUrl: './timeline-date.component.html',
  styleUrls: ['./timeline-date.component.sass']
})
export class TimelineDateComponent implements OnInit {
  @Input() date: string;
  @Input() rightAligned = true;

  constructor() {
    this.date = '';
  }

  ngOnInit(): void {
  }

}
