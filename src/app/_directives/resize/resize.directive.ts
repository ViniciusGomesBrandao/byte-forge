import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[resize]'
})
export class ResizeDirective {

  private isResizing = false;
  private initialX: number;
  private initialY: number;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    event.preventDefault();
    this.isResizing = true;
    this.initialX = event.clientX;
    this.initialY = event.clientY;
    this.renderer.addClass(this.el.nativeElement, 'resizing');
  }

  @HostListener('document:mouseup')
  onMouseUp() {
    this.isResizing = false;
    this.renderer.removeClass(this.el.nativeElement, 'resizing');
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.isResizing) {
      const dx = event.clientX - this.initialX;
      const dy = event.clientY - this.initialY;
      const newWidth = Math.max(10, this.el.nativeElement.offsetWidth + dx);
      const newHeight = Math.max(10, this.el.nativeElement.offsetHeight + dy);
      this.renderer.setStyle(this.el.nativeElement, 'width', `${newWidth}px`);
      this.renderer.setStyle(this.el.nativeElement, 'height', `${newHeight}px`);
    }
  }

}
