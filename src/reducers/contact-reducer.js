// src/reducers/contact-reducer.js 

const defaultState = {
	contacts: [],
};

export default (state=defaultState, action={}) => {
	switch (action.type) {
		case 'FETCH_CONTACTS_FULFILLED': {
			return {
				...state,
				contacts: action.payload.data.data,
				loading: false,
				errors: {}
			}
		}
		default:
			return state;
	}
};