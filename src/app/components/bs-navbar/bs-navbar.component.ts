import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.scss'],
})
export class BsNavbarComponent implements OnInit {
  isNavbarCollapsed = true;
  constructor(public route: ActivatedRoute, library: FaIconLibrary) {
    library.addIconPacks(fas);
    library.addIcons(faBars, faTimes);
  }

  ngOnInit(): void {}
}
