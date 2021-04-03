import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './sections/home/home.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AboutmeComponent} from './sections/aboutme/aboutme.component';
import {ContactComponent} from './sections/contact/contact.component';
import {EducationComponent} from './sections/education/education.component';
import {ExperiencesComponent} from './sections/experiences/experiences.component';
import {PortfolioComponent} from './sections/portfolio/portfolio.component';
import {SkillComponent} from './sections/skill/skill.component';
import {SkillsComponent} from './sections/skills/skills.component';
import {TimelineDateComponent} from './sections/timeline-date/timeline-date.component';
import {TimelineNodeComponent} from './sections/timeline-node/timeline-node.component';
import {TitleComponent} from './sections/title/title.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatChipsModule} from '@angular/material/chips';
import { DividerComponent } from './sections/divider/divider.component';
import { InterestComponent } from './sections/interest/interest.component';
import {HttpClientModule} from '@angular/common/http';
import { RewardsComponent } from './sections/rewards/rewards.component';
import { WorkComponent } from './sections/work/work.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutmeComponent,
    ContactComponent,
    EducationComponent,
    ExperiencesComponent,
    PortfolioComponent,
    SkillComponent,
    SkillsComponent,
    TimelineDateComponent,
    TimelineNodeComponent,
    TitleComponent,
    DividerComponent,
    InterestComponent,
    RewardsComponent,
    WorkComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        MatGridListModule,
        MatChipsModule,
        MatCardModule,
        MatListModule,
        MatIconModule,
        MatButtonModule,
        FontAwesomeModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
