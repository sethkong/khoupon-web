// src/actions/contact-actions.js 
// https://www.sitepoint.com/crud-app-react-redux-feathersjs/

// import { contacts } from '../contacts-data'; 

import { httpClient } from './';

const contactResource = '/contacts';

export const fetchContacts = () => {
	return dispatch => {
		dispatch({
			type: 'FETCH_CONTACTS',
			payload: httpClient.get(contactResource)
		})
	};
};