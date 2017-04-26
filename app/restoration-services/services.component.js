"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var RestorationServicesComponent = (function () {
    function RestorationServicesComponent() {
        this.idCollection = ['#fire', '#flood', '#storm', '#mold', '#cleaning', '#reconstuction'];
    }
    RestorationServicesComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        $('#fire').bind('mouseenter', function () {
            $("#fire").parent('.restoration-services').css({
                'border-color': 'orange'
            }, 300);
            _this.isHover1 = true;
        });
        $('#fire').bind('mouseleave', function () {
            $("#fire").parent('.restoration-services').css({
                'border-color': 'lightgrey'
            }, 300);
            _this.isHover1 = false;
        });
        $('#flood').bind('mouseenter', function () {
            $("#flood").parent('.restoration-services').css({
                'border-color': 'orange'
            }, 300);
            _this.isHover2 = true;
        });
        $('#flood').bind('mouseleave', function () {
            $("#flood").parent('.restoration-services').css({
                'border-color': 'lightgrey'
            }, 300);
            _this.isHover2 = false;
        });
        $('#storm').bind('mouseenter', function () {
            $("#storm").parent('.restoration-services').css({
                'border-color': 'orange'
            }, 300);
            _this.isHover3 = true;
        });
        $('#storm').bind('mouseleave', function () {
            $("#storm").parent('.restoration-services').css({
                'border-color': 'lightgrey'
            }, 300);
            _this.isHover3 = false;
        });
        $('#mold').bind('mouseenter', function () {
            $("#mold").parent('.restoration-services').css({
                'border-color': 'orange'
            }, 300);
            _this.isHover4 = true;
        });
        $('#mold').bind('mouseleave', function () {
            $("#mold").parent('.restoration-services').css({
                'border-color': 'lightgrey'
            }, 300);
            _this.isHover4 = false;
        });
        $('#cleaning').bind('mouseenter', function () {
            $("#cleaning").parent('.restoration-services').css({
                'border-color': 'orange'
            }, 300);
            _this.isHover5 = true;
        });
        $('#cleaning').bind('mouseleave', function () {
            $("#cleaning").parent('.restoration-services').css({
                'border-color': 'lightgrey'
            }, 300);
            _this.isHover5 = false;
        });
        $('#reconstuction').bind('mouseenter', function () {
            $("#reconstuction").parent('.restoration-services').css({
                'border-color': 'orange'
            }, 300);
            _this.isHover6 = true;
        });
        $('#reconstuction').bind('mouseleave', function () {
            $("#reconstuction").parent('.restoration-services').css({
                'border-color': 'lightgrey'
            }, 300);
            _this.isHover6 = false;
        });
    };
    return RestorationServicesComponent;
}());
RestorationServicesComponent = __decorate([
    core_1.Component({
        selector: 'restoration-services',
        templateUrl: './app/restoration-services/services.component.html',
        styleUrls: ['./app/restoration-services/services.component.css']
    })
], RestorationServicesComponent);
exports.RestorationServicesComponent = RestorationServicesComponent;
//# sourceMappingURL=services.component.js.map
