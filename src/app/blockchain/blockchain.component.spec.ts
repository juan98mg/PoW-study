import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockchainComponent } from './blockchain.component';

describe('PowComponent', () => {
  let component: BlockchainComponent;
  let fixture: ComponentFixture<BlockchainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlockchainComponent]
    });
    fixture = TestBed.createComponent(BlockchainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
