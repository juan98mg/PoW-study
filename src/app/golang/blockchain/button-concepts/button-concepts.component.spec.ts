import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonConceptsComponent } from './button-concepts.component';

describe('ButtonConceptsComponent', () => {
  let component: ButtonConceptsComponent;
  let fixture: ComponentFixture<ButtonConceptsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonConceptsComponent]
    });
    fixture = TestBed.createComponent(ButtonConceptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
