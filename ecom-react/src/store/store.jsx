import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import productSlice from './products/productSlicer';
import userSlice from './users/userSlicer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer:{
        product : productSlice,
        users : userSlice,
    },
    middleware : ( getDefaultMiddleware ) =>
        getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga)

export default store;