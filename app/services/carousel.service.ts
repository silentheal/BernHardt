import { Injectable } from '@angular/core';

import { CarouselImage } from '../interfaces/carousel.interface';
import { CarouselImages } from '../mocks/carousel.mock';

@Injectable()
export class CarouselService {
    getCarousel(): Promise<CarouselImage[]> {
        return Promise.resolve(CarouselImages);
    }
}