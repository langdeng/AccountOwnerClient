import { Directive, ElementRef, Output, EventEmitter, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appDatepicker]'
})
export class DatepickerDirective implements OnInit {
  @Input() public dateFormat: string = 'yy-mm-dd';
  @Output() public change = new EventEmitter();
 
  constructor(private elementRef: ElementRef) { }
 
  public ngOnInit() {
    ($(this.elementRef.nativeElement) as any).datepicker({
      dateFormat: this.dateFormat,
      changeYear: true,
      yearRange: "-100:+0",
      onSelect: (dateText) => {
        this.change.emit(dateText);
      }
    });
  }
}