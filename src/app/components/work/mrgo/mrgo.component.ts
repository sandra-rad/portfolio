import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mrgo',
  templateUrl: './mrgo.component.html',
  styleUrls: ['./mrgo.component.scss'],
})
export class MrgoComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  constructor() {}

  ngOnInit(): void {}
}
