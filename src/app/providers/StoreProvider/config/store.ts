import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { userReducer } from 'entities/User';

export function createReduxStore (initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        user: userReducer
    };

    return configureStore<StateSchema>({
        reducer: rootReducers,
        devTools: _IS_DEV_,
        preloadedState: initialState
    });
}
