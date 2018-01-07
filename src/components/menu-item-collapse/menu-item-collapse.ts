import { Component, Input, ViewChild, ElementRef, Renderer } from '@angular/core';

@Component({
  selector: 'menu-item-collapse',
  templateUrl: 'menu-item-collapse.html'
})
export class MenuItemCollapseComponent {

  	@ViewChild('expandWrapper', {read: ElementRef}) expandWrapper;
    @Input('expanded') expanded;
    
 
    constructor(public renderer: Renderer) {
 
    }
 
    

}
