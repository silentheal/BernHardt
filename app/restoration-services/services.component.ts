import { Transform } from 'stream';
import { animate, Component, Input, OnInit, state, style, transition, trigger } from '@angular/core';
import { Directive, ElementRef, Renderer } from '@angular/core';
declare var $: any;

@Component({
    selector: 'restoration-services',
    templateUrl: './app/restoration-services/services.component.html',
    styleUrls: ['./app/restoration-services/services.component.css']
})
export class RestorationServicesComponent implements OnInit {
    isHover1: boolean;
    isHover2: boolean;
    isHover3: boolean;
    isHover4: boolean;
    isHover5: boolean;
    isHover6: boolean;

    idCollection: any = ['#fire', '#flood', '#storm', '#mold', '#cleaning', '#reconstuction'];

    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.        
        $('#fire').bind('mouseenter',
            () => {
                $("#fire").parent('.restoration-services').css({
                    'border-color': 'orange'
                }, 300);
                this.isHover1 = true;
                
        });
        $('#fire').bind('mouseleave',
            () => {
                $("#fire").parent('.restoration-services').css({
                    'border-color': 'lightgrey'
                }, 300);
                this.isHover1 = false;
            });

        $('#flood').bind('mouseenter',
            () => {
                $("#flood").parent('.restoration-services').css({
                    'border-color': 'orange'
                }, 300);
                this.isHover2 = true;

            });
        $('#flood').bind('mouseleave',
            () => {
                $("#flood").parent('.restoration-services').css({
                    'border-color': 'lightgrey'
                }, 300);
                this.isHover2 = false;
            });

        $('#storm').bind('mouseenter',
            () => {
                $("#storm").parent('.restoration-services').css({
                    'border-color': 'orange'
                }, 300);
                this.isHover3 = true;

            });
        $('#storm').bind('mouseleave',
            () => {
                $("#storm").parent('.restoration-services').css({
                    'border-color': 'lightgrey'
                }, 300);
                this.isHover3 = false;
            });

        $('#mold').bind('mouseenter',
            () => {
                $("#mold").parent('.restoration-services').css({
                    'border-color': 'orange'
                }, 300);
                this.isHover4 = true;

            });
        $('#mold').bind('mouseleave',
            () => {
                $("#mold").parent('.restoration-services').css({
                    'border-color': 'lightgrey'
                }, 300);
                this.isHover4 = false;
            });

        $('#cleaning').bind('mouseenter',
            () => {
                $("#cleaning").parent('.restoration-services').css({
                    'border-color': 'orange'
                }, 300);
                this.isHover5 = true;

            });
        $('#cleaning').bind('mouseleave',
            () => {
                $("#cleaning").parent('.restoration-services').css({
                    'border-color': 'lightgrey'
                }, 300);
                this.isHover5 = false;
            });

        $('#reconstuction').bind('mouseenter',
            () => {
                $("#reconstuction").parent('.restoration-services').css({
                    'border-color': 'orange'
                }, 300);
                this.isHover6 = true;

            });
        $('#reconstuction').bind('mouseleave',
            () => {
                $("#reconstuction").parent('.restoration-services').css({
                    'border-color': 'lightgrey'
                }, 300);
                this.isHover6 = false;
            });
    }
}