import { createReducer, on } from '@ngrx/store';
import * as fromGlobalConfig from "./global.actions"
export interface GlobalState {
    openedMenu: boolean
} 

export const initialState: GlobalState  ={
    openedMenu: false
} 

export const reducer = createReducer(
    initialState,
    on(fromGlobalConfig.openMenu, (state, _): GlobalState => {
        const shouldOpenMenu = !state.openedMenu
        return {
            ...state,
            openedMenu: shouldOpenMenu
        }
    })
)