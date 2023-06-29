import { createAction, props } from '@ngrx/store';

export const selectBasicConcept = createAction(
  '[Blockchain] select basic concept',
  props<{ selectedComponent: string }>()
);
