import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-timeline-node',
  templateUrl: './timeline-node.component.html',
  styleUrls: ['./timeline-node.component.sass']
})
export class TimelineNodeComponent implements OnInit {
  @Input() subject: string;
  @Input() institute: string;
  @Input() duration: string;
  @Input() description: string;
  @Input() isCourse = false;
  @Input() isCertification = false;
  @Input() isWork = false;
  @Input() isHonor = false;
  @Input() rightAligned = false;

  constructor() {
    this.subject = '';
    this.institute = '';
    this.duration = '';
    this.description = '';
  }

  ngOnInit(): void {
  }

}
