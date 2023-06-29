import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription, tap } from 'rxjs';
import { AppState } from 'src/state';

@Component({
  selector: 'app-basic-concepts',
  templateUrl: './basic-concepts.component.html',
  styleUrls: ['./basic-concepts.component.scss'],
})
export class BasicConceptsComponent implements OnInit, OnDestroy {
  currentSelectedComponent$: Subscription = new Subscription();
  selectedComponent?: string;

  constructor(private store: Store<AppState>) {}

  ngOnDestroy(): void {
    this.currentSelectedComponent$.unsubscribe();
  }

  ngOnInit(): void {
    this.viewSelectedComponent();
  }

  viewSelectedComponent() {
    this.currentSelectedComponent$ = this.store
      .select((state) => state.blockchain.selectedBasicConcept)
      .pipe(
        tap((currentComponent: string | undefined): void => {
          this.selectedComponent = currentComponent;
        })
      )
      .subscribe();
  }
}
