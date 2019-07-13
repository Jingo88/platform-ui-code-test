import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
})
export class CardComponent {

  @Input() provider: any;
  @Input() type: string;
  @Output() toggleSelect: EventEmitter<Object> = new EventEmitter();

  constructor() { }
  
  emitToggleSelect(){
    this.toggleSelect.emit({
      ...this.provider,
      type: this.type
    })
  }

}
