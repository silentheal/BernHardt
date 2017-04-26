"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ReviewListComponent = (function () {
    function ReviewListComponent() {
        this.state1 = true;
        this.stateNum = 1;
    }
    ReviewListComponent.prototype.initialize = function () {
        var _this = this;
        this.stateNum = 2;
        setInterval(function () {
            _this.state1 = false;
            _this.state2 = false;
            _this.state3 = false;
            _this.state4 = false;
            if (_this.stateNum == 1) {
                _this.state1 = true;
            }
            else if (_this.stateNum == 2) {
                _this.state2 = true;
            }
            else if (_this.stateNum == 3) {
                _this.state3 = true;
            }
            else {
                _this.state4 = true;
            }
            _this.stateNum++;
            if (_this.stateNum > 4) {
                _this.stateNum = 1;
            }
        }, 3000);
    };
    ReviewListComponent.prototype.ngOnInit = function () {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.initialize();
    };
    return ReviewListComponent;
}());
ReviewListComponent = __decorate([
    core_1.Component({
        selector: 'review-list',
        templateUrl: './app/review/review.component.html',
        styleUrls: ['./app/review/review.component.css']
    })
], ReviewListComponent);
exports.ReviewListComponent = ReviewListComponent;
//# sourceMappingURL=review.component.js.map
