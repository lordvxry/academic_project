import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';

export function createReduxStore (initialState?: StateSchema) {
    return configureStore<StateSchema>({
        reducer: {},
        devTools: _IS_DEV_,
        preloadedState: initialState
    });
}
