import {Component, Input} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Resume-V2';
  @Input() colorBlock = 'purple';
}

export enum ProjectType{
  Website,
  WebApplication,
  DesktopApplication,
  MobileApplication
}
