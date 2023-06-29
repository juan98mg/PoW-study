import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import * as fromGlobalConfig from './global/global.reducer';
import * as fromBlockchainState from './golang/blockchain/blockchain.reducer';

export interface AppState {
  globalConfig: fromGlobalConfig.GlobalState;
  blockchain: fromBlockchainState.BlockchainState;
}

export const reducers: ActionReducerMap<AppState> = {
  globalConfig: fromGlobalConfig.reducer,
  blockchain: fromBlockchainState.reducer,
};

export const metaReducers: MetaReducer<AppState>[] = [];
