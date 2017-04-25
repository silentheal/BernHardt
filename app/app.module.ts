import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { whyUsComponent } from './whyUs/whyUs.component';
import { RestorationServicesComponent } from './restoration-services/services.component';
import { ContactUsComponent } from './contactUs/contactUs.component';
import { ReviewListComponent } from './review/review.component';

import { CarouselService } from './services/carousel.service';

const appRoutes: Routes = [
    { path: '#whyUs', component: whyUsComponent },
    { path: '#services', component: RestorationServicesComponent },
    { path: '#contactUs', component: ContactUsComponent },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        path: '**', component: AppComponent
    }
]

@NgModule({
  imports: [BrowserModule, CommonModule, RouterModule.forRoot(appRoutes) ],
  declarations: [AppComponent, CarouselComponent, whyUsComponent, RestorationServicesComponent, ContactUsComponent, ReviewListComponent ],
  providers:    [ CarouselService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
