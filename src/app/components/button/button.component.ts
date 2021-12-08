import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: [ './button.component.scss' ]
})
export class ButtonComponent implements OnInit {
  @Input() public label = '';
  @Output() public clicked = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit(): void {
  }

}
