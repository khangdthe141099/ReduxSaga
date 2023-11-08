import { all } from 'redux-saga/effects'
import { userSaga } from './user/saga'

export default function* rootSaga() { 
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    yield all([
        userSaga(),
    ])
}