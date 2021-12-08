import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandCirclesContainerComponent } from './hand-circles-container.component';

describe('HandCirclesContainerComponent', () => {
  let component: HandCirclesContainerComponent;
  let fixture: ComponentFixture<HandCirclesContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandCirclesContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HandCirclesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
