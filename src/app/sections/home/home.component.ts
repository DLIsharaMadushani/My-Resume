import { Component, OnInit } from '@angular/core';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  faFacebook = faFacebook;
  faLinkedIn = faLinkedin;
  faGithub = faGithub;

  constructor() { }

  ngOnInit(): void {
  }

  downloadResume(): void {
    window.open('../../../assets/resume.pdf', '_blank' );
  }
}
