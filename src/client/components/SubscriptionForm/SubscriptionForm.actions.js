import * as types from './ActionTypes'
export const addSubscriber = email => ({ type: types.ADD_SUBSCRIBER, email })
export const verifySubscriber = email => ({ type: types.VERIFY_SUBSCRIBER, email })