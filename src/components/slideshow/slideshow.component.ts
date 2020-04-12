import { Component, Input } from '@angular/core';
import { Slide } from '../../interfaces/index'

@Component({
  selector: 'slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})

export class SlideshowComponent {
  slides = [];
  currentSlide = 0;

  // Data input, sort slides according to sort values
  @Input()
  set slideshow(slideshow: Array<Slide>) {
    this.slides = slideshow.sort((slide, prevSlide) => slide.sort - prevSlide.sort)
  };

  get slideshow(): Array<Slide> { return this.slides };

  // Change active slide
  changeSlide(factor) {
    if (this.currentSlide + factor >=0 && this.currentSlide + factor < this.slides.length) {
      this.currentSlide = this.currentSlide + factor;
    }
  }
}
