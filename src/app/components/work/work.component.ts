import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
})
export class WorkComponent implements OnInit {
  projects = [
    {
      title: 'Board Games',
      img: '/assets/images/board_games.png',
      description:
        'I actively participated in the concept stage and implementation of a page. I worked with Photoshop, HTML, CSS, Javascript.',
      link: 'https://board-games-rental.ro/',
    },
    {
      title: '.VSV.V.',
      img: '/assets/images/vsvv.png',
      description:
        'I actively participated in the concept stage and implementation of a page. I worked with Photoshop, HTML, CSS, Javascript.',
      link: 'https://vsvv.ch/',
    },
    {
      title: 'Mäklarringen Go',
      img: '/assets/images/mrgo.png',
      description:
        'I actively participated in the concept stage and implementation of a page. I worked with Photoshop, HTML, CSS, Javascript.',
      link: '/mrgo',
    },
    {
      title: 'Victoriabank CLUB',
      img: '/assets/images/vbclub.png',
      description:
        'I actively participated in the concept stage and implementation of a page. I worked with Photoshop, HTML, CSS, Javascript.',
      link: 'https://club.victoriabank.md/',
    },
    {
      title: 'Norda Shop',
      img: '/assets/images/norda.png',
      description:
        'I actively participated in the concept stage and implementation of a page. I worked with Photoshop, HTML, CSS, Javascript.',
      link: 'https://nordashop.com/',
    },
    {
      title: 'Angular Course',
      img: '/assets/images/porto.png',
      description:
        'I actively participated in the concept stage and implementation of a page. I worked with Photoshop, HTML, CSS, Javascript.',
      link: 'https://shop-6c47f.web.app/',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
