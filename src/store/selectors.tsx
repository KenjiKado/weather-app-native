import { useSelector } from "react-redux";
import { WEATHER_CONDITIONS } from "../constants/weather";

interface IState {
	temp: number;
	feelsLike: number;
	condition: {
		main: keyof typeof WEATHER_CONDITIONS
	};
	location: string;
	loading: boolean;
}

export const useWeatherSelector = () => useSelector((state: IState) => state);