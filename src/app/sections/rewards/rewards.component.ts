import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.sass']
})
export class RewardsComponent implements OnInit {
  title: 'Honours & Rewards';

  constructor() { }

  ngOnInit(): void {
  }

}
