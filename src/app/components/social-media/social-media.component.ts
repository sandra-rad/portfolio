import { Component, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  fab,
  faFacebookF,
  faInstagram,
  faYoutube,
  faGithub,
  faJsfiddle,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss'],
})
export class SocialMediaComponent implements OnInit {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fab);
    library.addIcons(faInstagram, faYoutube, faFacebookF, faGithub, faJsfiddle);
  }

  ngOnInit(): void {}
}
