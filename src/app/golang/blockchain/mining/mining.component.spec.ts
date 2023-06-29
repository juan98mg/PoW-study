import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiningComponent } from './mining.component';

describe('MiningComponent', () => {
  let component: MiningComponent;
  let fixture: ComponentFixture<MiningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiningComponent]
    });
    fixture = TestBed.createComponent(MiningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
