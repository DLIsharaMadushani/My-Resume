import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.sass']
})
export class DividerComponent implements OnInit {
  @Input() clockwise = true;

  constructor() { }

  ngOnInit(): void {
  }

}
