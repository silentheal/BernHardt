"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var carousel_component_1 = require("./carousel/carousel.component");
var whyUs_component_1 = require("./whyUs/whyUs.component");
var services_component_1 = require("./restoration-services/services.component");
var contactUs_component_1 = require("./contactUs/contactUs.component");
var review_component_1 = require("./review/review.component");
var carousel_service_1 = require("./services/carousel.service");
var appRoutes = [
    { path: '#whyUs', component: whyUs_component_1.whyUsComponent },
    { path: '#services', component: services_component_1.RestorationServicesComponent },
    { path: '#contactUs', component: contactUs_component_1.ContactUsComponent },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        path: '**', component: app_component_1.AppComponent
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, common_1.CommonModule, router_1.RouterModule.forRoot(appRoutes)],
        declarations: [app_component_1.AppComponent, carousel_component_1.CarouselComponent, whyUs_component_1.whyUsComponent, services_component_1.RestorationServicesComponent, contactUs_component_1.ContactUsComponent, review_component_1.ReviewListComponent],
        providers: [carousel_service_1.CarouselService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
