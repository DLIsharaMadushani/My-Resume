import { Component, OnInit } from '@angular/core';
import {ProjectType} from '../../app.component';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.sass']
})
export class PortfolioComponent implements OnInit {
  title = 'Portfolio';
  projectType: ProjectType;

  constructor() { }

  ngOnInit(): void {
  }

}
