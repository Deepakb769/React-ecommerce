import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import productReducer from './products/productSlicer';
import {watchFetchProducts} from './products/productSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer:{
        product : productReducer,
    },
    middleware : ( getDefaultMiddleware ) =>
        getDefaultMiddleware({thunk: false}).concat(sagaMiddleware),
});

sagaMiddleware.run(watchFetchProducts);

export default store;