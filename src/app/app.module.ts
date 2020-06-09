import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { HomepageComponent } from './homepage/homepage.component';
import { BsNavbarComponent } from './components/bs-navbar/bs-navbar.component';
import { HelloComponent } from './components/hello/hello.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WorkComponent } from './components/work/work.component';
import { FilmsComponent } from './components/films/films.component';
import { AboutComponent } from './components/about/about.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    BsNavbarComponent,
    HelloComponent,
    WorkComponent,
    FilmsComponent,
    AboutComponent,
    SocialMediaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
