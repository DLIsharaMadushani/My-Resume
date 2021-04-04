import {Component, Input, OnInit} from '@angular/core';
import {ProjectType} from '../../app.component';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.sass']
})
export class WorkComponent implements OnInit {
  @Input() projectName: string;
  @Input() projectType: string;
  @Input() projectDesc: string;
  @Input() skills: string[];

  constructor() { }

  ngOnInit(): void {
  }

}


