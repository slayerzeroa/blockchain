import {
    LOGIN_USER, REGISTER_USER, LOGOUT_USER, AUTH_USER
} from 'C:\\Users\\함수림\\pompay2\\pompay_paran\\client\\src\\_actions\\types.js';

export default function (state= {}, action){
    switch (action.type){
        case LOGIN_USER:
            return {...state,loginSuccess: action.payload}
            break;
        case REGISTER_USER:
            return {...state, register: action.payload}
            break;
        case LOGOUT_USER:
            return {...state, success: action.payload}
            break;
        case AUTH_USER:
            return {...state, userData: action.payload}
            break;
        default:
            return state;
    }
}