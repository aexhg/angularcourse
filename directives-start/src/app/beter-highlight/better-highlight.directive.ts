import { Directive,
         Renderer2, 
         OnInit, 
         ElementRef, 
         HostListener, 
         HostBinding,
         Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighLight]'
})
export class BetterHighlightDirective  implements OnInit {
  @Input() defaultColour: string;
  @Input() highlightColour: string = 'lightblue';
  @HostBinding( 'style.backgroundColor' ) backgroudColour: string = this.defaultColour;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    this.backgroudColour = this.defaultColour;
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'lightblue');
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'lightblue');
    this.backgroudColour = this.highlightColour;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroudColour = this.defaultColour;
  }
}
