import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitBlockComponent } from './unit-block.component';

describe('UnitBlockComponent', () => {
  let component: UnitBlockComponent;
  let fixture: ComponentFixture<UnitBlockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnitBlockComponent]
    });
    fixture = TestBed.createComponent(UnitBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
