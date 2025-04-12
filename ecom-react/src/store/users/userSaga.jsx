import {call, put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import { loginRequest, loginSuccess, loginFailure, fetchUserSuccess } from './userSlicer';

function* handleLogin(action){
    try{
        const {username} = action.payload;

        const response = yield call(axios.post,"https://fakestoreapi.com/auth/login", action.payload);
        console.log(response)
        const token = response.data.token;

        yield put(loginSuccess({token}));
        console.log(token);

        const usersRespond = yield call(axios.get, "https://fakestoreapi.com/users")
        const userDetail = usersRespond.data;

        const loggedInUser = userDetail.find(user => user.username === username);

        if(!loggedInUser){
            throw new Error("User not found");
        }

        const userRes = yield call(axios.get, `https://fakestoreapi.com/users/${userId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        console.log(userRes.data)

        yield put(fetchUserSuccess(userRes.data))
        
    }
    catch(error){
        yield put(loginFailure(error.message));
    }
}

export function* watchLoginRequest(){
    yield takeLatest(loginRequest.type, handleLogin);
}