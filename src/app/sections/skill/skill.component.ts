import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.sass']
})
export class SkillComponent implements OnInit {
  @Input() img: string;
  @Input() skill: string;

  constructor() {
    this.img = '';
    this.skill = '';
  }

  ngOnInit(): void {
  }


}
