import { createSlice } from "redux-starter-kit";

const addSubscriber = (state, action) => [
	...state, 
	{
		id: state.reduce((maxId, subscriber) => Math.max(subscriber.id, maxId), -1)+1,
		verified: false, 
		email: action.payload.email
	}
];

const subscribers = createSlide({
	slice: "subscribers",
	initialState: [],
	reducers: {
		add: addSubscriber
	}
});

export ( subscribers );