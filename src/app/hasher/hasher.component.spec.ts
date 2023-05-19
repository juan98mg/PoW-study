import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HasherComponent } from './hasher.component';

describe('HasherComponent', () => {
  let component: HasherComponent;
  let fixture: ComponentFixture<HasherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HasherComponent]
    });
    fixture = TestBed.createComponent(HasherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
