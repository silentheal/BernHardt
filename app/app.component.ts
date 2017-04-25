import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<main-carousel></main-carousel>
             <why-us id="whyUs"></why-us>
             <review-list></review-list>
             <restoration-services id="services"></restoration-services>
             <contact-us id="contactUs"></contact-us>`,
  styles: []
})
export class AppComponent
{
  
}