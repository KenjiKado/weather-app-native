import { AnyAction } from "redux";
import { SagaIterator } from '@redux-saga/types';
import { call, put, takeEvery } from '@redux-saga/core/effects';
import { getWeatherFail, getWeatherRequest, getWeatherSuccess } from "./actions";
import axios from "axios";
import { API, API_KEY } from "../constants/api";
import { FETCH_WEATHER } from "./types";

const getWeather = async (props: any) => {
	return axios({
		method: 'GET',
		url: API.CURRENT_WEATHER_DATA + `?lat=${props.latitude}&lon=${props.longitude}&appid=${API_KEY}&units=metric&lang=${props.region || 'US'}`
	});
}

function* getWeatherSaga(action: AnyAction): SagaIterator {
	const { latitude, longitude, region } = action.payload;
	try {
		yield put(getWeatherRequest());

		const payload = yield call(getWeather, { latitude, longitude, region });
		const { data } = payload;

		yield put(getWeatherSuccess({
			temp: data.main.temp,
			feelsLike: data.main.feels_like,
			condition: data.weather[0],
			location: data.name,
		}));
	}
	catch (e) {
		yield put(getWeatherFail());
	}

}

export function* saga() {
	yield takeEvery(FETCH_WEATHER, getWeatherSaga);
}