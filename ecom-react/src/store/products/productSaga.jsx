import {call, put, takeLatest} from 'redux-saga/effects';
import { fetchProductRequest, fetchProductSuccess, fetchProductFailure } from './productSlicer';
import axios from 'axios';

function* fetchProducts(){
    try{
        const response = yield call(axios.get, 'https://fakestoreapi.com/products')
        yield put(fetchProductSuccess(response.data));
    }
    catch(error){
        yield put(fetchProductFailure(error.message));
    }
}

export function* watchFetchProducts(){
    yield takeLatest(fetchProductRequest.type, fetchProducts);
}

