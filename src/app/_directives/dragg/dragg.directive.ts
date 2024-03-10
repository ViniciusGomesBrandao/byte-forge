import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
@Directive({
  selector: '[dragg]'
})
export class DraggDirective {
  private isDragging = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    if (event.shiftKey) {
      event.preventDefault();
      this.isDragging = true;
      this.renderer.addClass(this.el.nativeElement, 'dragging');
    }
  }

  @HostListener('document:mouseup')
  onMouseUp() {
    this.isDragging = false;
    this.renderer.removeClass(this.el.nativeElement, 'dragging');
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.isDragging) {
      const dx = event.movementX;
      const dy = event.movementY;
      this.renderer.setStyle(this.el.nativeElement, 'left', `${this.el.nativeElement.offsetLeft + dx}px`);
      this.renderer.setStyle(this.el.nativeElement, 'top', `${this.el.nativeElement.offsetTop + dy}px`);
    }
  }
}
