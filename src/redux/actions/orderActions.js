import axios from 'axios';
import { setError, setShippingAddress, clearOrder } from '../slices/order';

// Base URL for API
const API_URL = process.env.REACT_APP_API_URL;

export const setAddress = (data) => (dispatch) => {
	dispatch(setShippingAddress(data));
};

export const setPayment = () => async (dispatch, getState) => {
	const {
		cart: { cartItems, subtotal, shipping },
		order: { shippingAddress },
		user: { userInfo },
	} = getState();

	console.log(shippingAddress);

	const newOrder = { subtotal, shipping, shippingAddress, cartItems, userInfo };

	try {
		const config = { headers: { Authorization: `Bearer ${userInfo.token}`, 'Content-Type': 'application/json' } };

		// Updated the API endpoint with the full base URL
		const { data } = await axios.post(`${API_URL}/checkout`, newOrder, config);

		// Redirect user to the payment page
		window.location.assign(data.url);
	} catch (error) {
		dispatch(
			setError(
				error.response?.data?.message || error.message || 'An unexpected error has occurred. Please try again later.'
			)
		);
	}
};

export const resetOrder = () => async (dispatch) => {
	dispatch(clearOrder());
};
