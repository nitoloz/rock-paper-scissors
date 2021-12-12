import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: [ './button.component.scss' ]
})
export class ButtonComponent {
  @Input() public label = '';
  @Output() public clicked = new EventEmitter<void>();

}
