import { createReducer, on } from '@ngrx/store';
import * as fromGlobalConfig from './blockchain.actions';
export interface BlockchainState {
  selectedBasicConcept?: string;
}

export const initialState: BlockchainState = {
  selectedBasicConcept: 'hash',
};

export const reducer = createReducer(
  initialState,
  on(fromGlobalConfig.selectBasicConcept, (state, action): BlockchainState => {
    return {
      ...state,
      selectedBasicConcept: action.selectedComponent,
    };
  })
);
