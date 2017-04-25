import { animate, Component, Input, OnInit, state, style, transition, trigger } from '@angular/core';
import { Directive, ElementRef, Renderer } from '@angular/core';

@Component({
    selector: 'review-list',
    templateUrl: './app/review/review.component.html',
    styleUrls: ['./app/review/review.component.css']
})
export class ReviewListComponent implements OnInit{
    state1: boolean = true;
    state2: boolean;
    state3: boolean;
    state4: boolean;
    stateNum: number = 1;

    initialize() {
        this.stateNum = 2;
        setInterval(() => {
            this.state1 = false;
            this.state2 = false;
            this.state3 = false;
            this.state4 = false;

            if(this.stateNum == 1) {
                this.state1 = true;
            } else if(this.stateNum == 2) {
                this.state2 = true;
            } else if(this.stateNum == 3) {
                this.state3 = true;
            } else {
                this.state4 = true;
            }

            this.stateNum++;
            if(this.stateNum > 4) {
                this.stateNum = 1;
            }

        }, 3000);
    }

    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.initialize();
    }

    
}