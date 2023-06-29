import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/state';
import { selectBasicConcept } from 'src/state/golang/blockchain/blockchain.actions';

@Component({
  selector: 'app-button-concepts',
  templateUrl: './button-concepts.component.html',
  styleUrls: ['./button-concepts.component.scss'],
})
export class ButtonConceptsComponent {
  constructor(private store: Store<AppState>) {}

  selectComponent(newComponent: string) {
    this.store.dispatch(
      selectBasicConcept({ selectedComponent: newComponent })
    );
  }
}
