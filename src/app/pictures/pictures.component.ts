import { Component, OnInit, ViewChild} from '@angular/core';
import { Gallery, GalleryRef, GalleryItem, ImageItem } from 'ng-gallery';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.css']
})

export class PicturesComponent implements OnInit {
  src;
  
  constructor(private gallery: Gallery) { }
  images: GalleryItem[];

  ngOnInit() {
    

    // Set gallery items array
    this.images = [
      new ImageItem({ src: '../../assets/pics/24.jpg', thumb: './../assets/pics/thumbs/24.jpg' }),
      new ImageItem({ src: '../../assets/pics/23.jpg', thumb: './../assets/pics/thumbs/23.jpg' }),
      new ImageItem({ src: '../../assets/pics/22.jpg', thumb: './../assets/pics/thumbs/22.jpg' }),
      new ImageItem({ src: '../../assets/pics/21.jpg', thumb: './../assets/pics/thumbs/21.jpg' }),
      new ImageItem({ src: '../../assets/pics/20.jpg', thumb: './../assets/pics/thumbs/20.jpg' }),
      new ImageItem({ src: '../../assets/pics/19.jpg', thumb: './../assets/pics/thumbs/19.jpg' }),
      new ImageItem({ src: '../../assets/pics/18.jpg', thumb: './../assets/pics/thumbs/18.jpg' }),
      new ImageItem({ src: '../../assets/pics/17.jpg', thumb: './../assets/pics/thumbs/17.jpg' }),
      new ImageItem({ src: '../../assets/pics/16.jpg', thumb: './../assets/pics/thumbs/16.jpg' }),
      new ImageItem({ src: '../../assets/pics/15.jpg', thumb: './../assets/pics/thumbs/15.jpg' }),
      new ImageItem({ src: '../../assets/pics/14.jpg', thumb: './../assets/pics/thumbs/14.jpg' }),
      new ImageItem({ src: '../../assets/pics/1.jpg', thumb: './../assets/pics/thumbs/1.jpg' }),
      new ImageItem({ src: '../../assets/pics/2.jpg', thumb: './../assets/pics/thumbs/2.jpg' }),
      new ImageItem({ src: '../../assets/pics/3.jpg', thumb: './../assets/pics/thumbs/3.jpg' }),
      new ImageItem({ src: '../../assets/pics/4.jpg', thumb: './../assets/pics/thumbs/4.jpg' }),
      new ImageItem({ src: '../../assets/pics/5.jpg', thumb: './../assets/pics/thumbs/5.jpg' }),
      new ImageItem({ src: '../../assets/pics/6.jpg', thumb: './../assets/pics/thumbs/6.jpg' }),
      new ImageItem({ src: '../../assets/pics/7.jpg', thumb: './../assets/pics/thumbs/7.jpg' }),
      new ImageItem({ src: '../../assets/pics/8.jpg', thumb: './../assets/pics/thumbs/8.jpg' }),
      new ImageItem({ src: '../../assets/pics/9.jpg', thumb: './../assets/pics/thumbs/9.jpg' }),
      new ImageItem({ src: '../../assets/pics/10.jpg', thumb: './../assets/pics/thumbs/10.jpg' }),
      new ImageItem({ src: '../../assets/pics/11.jpg', thumb: './../assets/pics/thumbs/11.jpg' }),
      new ImageItem({ src: '../../assets/pics/12.jpg', thumb: './../assets/pics/thumbs/12.jpg' }),
      new ImageItem({ src: '../../assets/pics/13.jpg', thumb: './../assets/pics/thumbs/13.jpg' }),


      // ... more items
    ];
    this.gallery.ref('root').state.subscribe((thang)=> {
      console.log(thang.currIndex)
      this.src = this.images[thang.currIndex].data.src;
    })
  }
  getPic(){

    
  }
}