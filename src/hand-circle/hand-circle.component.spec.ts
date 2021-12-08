import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandCircleComponent } from './hand-circle.component';

describe('HandCircleComponent', () => {
  let component: HandCircleComponent;
  let fixture: ComponentFixture<HandCircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandCircleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HandCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
