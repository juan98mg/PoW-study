import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import * as fromGlobalConfig from "./global/global.reducer"

export interface AppState {
    globalConfig: fromGlobalConfig.GlobalState
}

export const reducers: ActionReducerMap<AppState> = {
    globalConfig: fromGlobalConfig.reducer
}

export const metaReducers: MetaReducer<AppState>[] = []