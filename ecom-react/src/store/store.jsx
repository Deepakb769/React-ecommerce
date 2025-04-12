import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import productReducer from './products/productSlicer';
import {watchFetchProducts} from './products/productSaga';
import { watchLoginRequest } from './users/userSaga';
import userReducer from './users/userSlicer';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer:{
        product : productReducer,
        users : userReducer,
    },
    middleware : ( getDefaultMiddleware ) =>
        getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(watchFetchProducts);
sagaMiddleware.run(watchLoginRequest);

export default store;