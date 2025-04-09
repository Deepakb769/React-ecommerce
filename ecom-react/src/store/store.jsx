import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import productSlice from './products/productSlicer';
import productSaga from './products/productSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer:{
        product : productSlice,
    },
    miidleware : getDefaultMiddleware =>
        getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(productSaga);

export default store;