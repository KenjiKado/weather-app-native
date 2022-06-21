import { AnyAction } from 'redux';
import { GET_WEATHER_FAIL, GET_WEATHER_REQUEST, GET_WEATHER_SUCCESS } from './types';

const initialState = {
	temp: null,
	feelsLike: null,
	condition: null,
	location: null,
	loading: false,
};

const reducer = (state = initialState, action: AnyAction) => {
	const { type, payload } = action;

	switch (type) {
		case GET_WEATHER_REQUEST:
			return {
				...state,
				loading: true
			};

		case GET_WEATHER_SUCCESS:
			return {
				...state,
				...payload,
				loading: false
			};

		case GET_WEATHER_FAIL:
			return initialState;

		default:
			return state;
	}
}

export default reducer;