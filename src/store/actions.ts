import { WEATHER_CONDITIONS } from "../constants/weather";
import { FETCH_WEATHER, GET_WEATHER_FAIL, GET_WEATHER_REQUEST, GET_WEATHER_SUCCESS } from "./types";

interface IPayload {
	temp: number;
	feelsLike: number;
	condition: {
		main: keyof typeof WEATHER_CONDITIONS
	};
	location: string;
}

export const fetchWeather = (payload: { latitude: number, longitude: number, region: string | null }) => ({
	type: FETCH_WEATHER,
	payload
});

export const getWeatherRequest = () => ({
	type: GET_WEATHER_REQUEST
});

export const getWeatherSuccess = (payload: IPayload) => ({
	type: GET_WEATHER_SUCCESS,
	payload
});

export const getWeatherFail = () => ({
	type: GET_WEATHER_FAIL
});