"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var carousel_service_1 = require("../services/carousel.service");
var CarouselComponent = (function () {
    function CarouselComponent(carouselService) {
        this.carouselService = carouselService;
    }
    CarouselComponent.prototype.getCarousel = function () {
        var _this = this;
        this.carouselService.getCarousel().then(function (x) { return _this.carouselImages = x; });
    };
    CarouselComponent.prototype.ngOnInit = function () {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.getCarousel();
    };
    return CarouselComponent;
}());
CarouselComponent = __decorate([
    core_1.Component({
        //moduleId: module.id,
        selector: 'main-carousel',
        templateUrl: './app/carousel/carousel.html',
        styleUrls: ['./app/carousel/carousel.component.css'],
        providers: [carousel_service_1.CarouselService]
    }),
    __metadata("design:paramtypes", [carousel_service_1.CarouselService])
], CarouselComponent);
exports.CarouselComponent = CarouselComponent;
//# sourceMappingURL=carousel.component.js.map
