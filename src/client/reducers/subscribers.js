import { ADD_SUBSCRIBER } from '../constants/ActionTypes'

const initialState = [
	{
		email: 'troydo42@gmail.com',
		verified: false,
		id: 0
	}
]

export default function subscribers(state=initialState, action){
	switch(action.type){
		case ADD_SUBSCRIBER:
			return [
				...state, 
				{
					id: state.reduce((maxId, todo) => Math.max(subscriber.id, maxId), -1) + 1,
	 				verified: false,
	      			email: action.email
				}
			]

		default:
				return state
	}

}