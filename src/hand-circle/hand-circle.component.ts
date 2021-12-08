import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hand } from '../models/hand';

@Component({
  selector: 'app-hand-circle',
  templateUrl: './hand-circle.component.html',
  styleUrls: [ './hand-circle.component.scss' ]
})
export class HandCircleComponent implements OnInit {
  @Input() public hand: Hand = Hand.Rock;

  @Output() public handClicked = new EventEmitter<void>();


  public handEnum = Hand;

  constructor() {
  }

  ngOnInit(): void {
  }

}
