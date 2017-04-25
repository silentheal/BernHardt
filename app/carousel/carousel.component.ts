import { Component, OnInit } from '@angular/core';

import { CarouselImage } from '../interfaces/carousel.interface';
import { CarouselService } from '../services/carousel.service';

@Component({
    //moduleId: module.id,
    selector: 'main-carousel',
    templateUrl: './app/carousel/carousel.html',
    styleUrls: [ './app/carousel/carousel.component.css' ],
    providers: [ CarouselService ]
})

export class CarouselComponent implements OnInit {
   carouselImages: CarouselImage[];

   constructor(private carouselService: CarouselService) { }

   getCarousel(): void {
       this.carouselService.getCarousel().then(x => this.carouselImages = x);
   }

   ngOnInit(): void {
       //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
       //Add 'implements OnInit' to the class.
       this.getCarousel();
   }
}

