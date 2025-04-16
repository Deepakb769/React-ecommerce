import { all } from "redux-saga/effects";
import { watchFetchProducts } from "./products/productSaga";
import { watchLoginRequest } from "./users/userSaga";

export default function* rootSaga() {
    yield all([
        watchFetchProducts(),
        watchLoginRequest(),
    ])
}