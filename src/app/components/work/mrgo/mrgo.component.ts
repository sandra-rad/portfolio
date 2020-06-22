import { Component, OnInit } from '@angular/core';
import { Col } from 'src/app/constants/constant.model';
import { Subscription } from 'rxjs';
import { Lightbox } from '../../lightbox/lightbox.service';

@Component({
  selector: 'mrgo',
  templateUrl: './mrgo.component.html',
  styleUrls: ['./mrgo.component.scss'],
})
export class MrgoComponent implements OnInit {
  albums: Array<any> = [];
  allImages = this.albums.length;
  private subscription: Subscription;
  constructor(private lightbox: Lightbox) {
    for (let i = 1; i <= 5; i++) {
      const src = `/assets/images/album/${i}.png`;
      const caption = `Image ${i}`;
      const thumb = `/assets/images/album/${i}.png`;
      const album = {
        src,
        caption,
        thumb,
      };

      this.albums.push(album);
    }
  }

  open(index: number): void {
    // open lightbox
    this.lightbox.open(this.albums, index);
  }
  close(): void {
    // close lightbox programmatically
    this.lightbox.close();
  }

  getClass(index: number): string {
    switch (this.albums.length) {
      case 1:
        return Col.col12;
      case 2:
        return Col.col6;
      case 3:
        if (index === 0) {
          return Col.col12;
        } else {
          return Col.col6;
        }

      default:
        if (index === 0) {
          return Col.col12;
        } else if (index === 1) {
          return Col.col6;
        } else {
          return `${Col.col6} article-img-overlay`;
        }
    }
  }

  ngOnInit(): void {}
}
