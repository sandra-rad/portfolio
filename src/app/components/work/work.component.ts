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
        "I converted the Zeplin website design into HTML, JavaScript, and SCSS code. I was responsible for the website's visual frontend to be free of errors and looks exactly as designed.",
      link: 'https://vsvv.ch/',
    },
    {
      title: 'Mäklarringen Go',
      img: '/assets/images/mrgo.png',
      description:
        // tslint:disable-next-line: quotemark
        "I converted the Zeplin website design into HTML, JavaScript, and SCSS code. I was responsible for the website's visual frontend. Also, I worked with the client to redesign components.",
      link: '/mrgo',
    },
    {
      title: 'Victoriabank CLUB',
      img: '/assets/images/vbclub.png',
      description:
        'I designed and implemented this page. I worked with Adobe XD, HTML, SCSS, Javascript.',
      link: 'https://club.victoriabank.md/',
    },
    {
      title: 'Norda Shop',
      img: '/assets/images/norda.png',
      description:
        'I implemented and design new sections, banners, and campaigns.',
      link: 'https://nordashop.com/',
    },
    {
      title: 'Angular Course',
      img: '/assets/images/porto.png',
      description: 'Started learning Angular.',
      link: 'https://shop-6c47f.web.app/',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
