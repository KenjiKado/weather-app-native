import { MaterialCommunityIcons } from '@expo/vector-icons';

interface IWeatherOptions {
	[type: string]: {
		iconName: React.ComponentProps<typeof MaterialCommunityIcons>['name']
		gradient: string[];
	}
};

export enum WEATHER_CONDITIONS {
	Thunderstorm,
	Drizzle,
	Rain,
	Snow,
	Mist,
	Smoke,
	Haze,
	Dust,
	Fog,
	Sand,
	Ash,
	Squall,
	Tornado,
	Clear,
	Clouds
}

export const weatherOptions: IWeatherOptions = {
	Thunderstorm: {
		iconName: 'weather-lightning',
		gradient: ['#141E30', '#243B55']
	},
	Drizzle: {
		iconName: 'weather-pouring',
		gradient: ['#3A7BD5', '#3A6073']
	},
	Rain: {
		iconName: 'weather-rainy',
		gradient: ['#000046', '#1CB5E0']
	},
	Snow: {
		iconName: 'snowflake',
		gradient: ['#83A4D4', '#B6FBFF']
	},
	Mist: {
		iconName: 'weather-fog',
		gradient: ['#606C88', '#3F4C6B']
	},
	Smoke: {
		iconName: 'weather-windy',
		gradient: ['#56CCF2', '#2F80ED']
	},
	Haze: {
		iconName: 'weather-windy',
		gradient: ['#56CCF2', '#2F80ED']
	},
	Dust: {
		iconName: 'weather-windy-variant',
		gradient: ['#B79891', '#94716B']
	},
	Fog: {
		iconName: 'weather-fog',
		gradient: ['#606C88', '#3F4C6B']
	},
	Sand: {
		iconName: 'weather-windy',
		gradient: ['#56CCF2', '#2F80ED']
	},
	Ash: {
		iconName: 'weather-windy',
		gradient: ['#56CCF2', '#2F80ED']
	},
	Squall: {
		iconName: 'weather-windy',
		gradient: ['#141E30', '#243B55']
	},
	Tornado: {
		iconName: 'weather-tornado',
		gradient: ['#141E30', '#243B55']
	},
	Clear: {
		iconName: 'weather-sunny',
		gradient: ['#56CCF2', '#2F80ED']
	},
	Clouds: {
		iconName: 'weather-cloudy',
		gradient: ['#757F9A', '#D7DDE8']
	}
};