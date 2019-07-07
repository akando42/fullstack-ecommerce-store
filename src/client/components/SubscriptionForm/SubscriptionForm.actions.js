import * as types from '../../constants/ActionTypes'
export const addSubscriber = email => ({ type: types.ADD_SUBSCRIBER, email })
export const verifySubscriber = email => ({ type: types.VERIFY_SUBSCRIBER, email })