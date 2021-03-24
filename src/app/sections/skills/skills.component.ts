import {Component, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.sass'],
})


export class SkillsComponent implements OnInit {
  title = 'Skills & Knowledge';
  constructor() { }

  ngOnInit(): void {
  }

}
