import { Component, OnInit } from '@angular/core';
import { Gallery, ThumbnailsPosition, ImageSize, GalleryItem } from '@ngx-gallery/core';
import { Lightbox } from '@ngx-gallery/lightbox';

const data = [
  {
    srcUrl: '/assets/img/Gallery/img1.jpg',
    previewUrl: '/assets/img/Gallery/img1.jpg'
  },
  {
    srcUrl: '/assets/img/Gallery/img2.jpg',
    previewUrl: '/assets/img/Gallery/img2.jpg'
  },
  {
    srcUrl: '/assets/img/Gallery/img3.jpg',
    previewUrl: '/assets/img/Gallery/img3.jpg'
  },
  {
    srcUrl: '/assets/img/Gallery/img4.jpg',
    previewUrl: '/assets/img/Gallery/img4.jpg'
  },
];

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  items: GalleryItem[];

  imageData = data;

  constructor(public gallery: Gallery, public lightbox: Lightbox) {
  }

  checkImg() {
    // Get a lightbox gallery ref
    const lightboxRef = this.gallery.ref('lightbox');

    // Add custom gallery config to the lightbox (optional)
    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top,
      loadingMode: 'indeterminate'
    });

    // Load items into the lightbox gallery ref
    lightboxRef.load(this.items);
  }

  ngOnInit() {
    this.checkImg();
  }

}