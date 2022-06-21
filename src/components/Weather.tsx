import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { weatherOptions, WEATHER_CONDITIONS } from '../constants/weather';

interface IWeatherProps {
	temp: number;
	feelsLike: number;
	condition?: keyof typeof WEATHER_CONDITIONS;
	location: string;
}

const Weather = ({ temp, condition, location, feelsLike }: IWeatherProps) => {
	return (
		<>
			{condition ?
				<LinearGradient
					colors={weatherOptions[condition].gradient}
					style={styles.content}
				>
					<View style={styles.weather}>
						<MaterialCommunityIcons name={weatherOptions[condition].iconName} size={100} color="#fff" />
						<Text style={styles.temp}>{Math.round(temp) + '°C'}</Text>
						<Text style={styles.feelsLike}>Ощущается как: {Math.round(feelsLike) + '°C'}</Text>
					</View>
					<View>
						<Text style={styles.title}>{location}</Text>
					</View>
					<StatusBar barStyle="light-content" />

				</LinearGradient>
				:
				<View style={styles.empty}>
					<Text style={styles.noData}>Нет данных о погоде</Text>
					<StatusBar barStyle="light-content" />
				</View>
			}
		</>
	)
}

const styles = StyleSheet.create({
	content: {
		flex: 1,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center'
	},
	temp: {
		fontSize: 34,
		color: "#fff"
	},
	feelsLike: {
		fontSize: 16,
		color: "#fff"
	},
	empty: {
		flex: 1,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#757f9a'
	},
	noData: {
		fontSize: 18,
		color: "#fff"
	},
	weather: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	position: {
		flex: 1,
		width: '100%',
		justifyContent: "flex-start",
		alignItems: 'center',
		paddingHorizontal: 20
	},
	title: {
		marginBottom: 30,
		fontSize: 44,
		fontWeight: '300',
		textAlign: 'center',
		color: '#fff'
	},
	subtitle: {
		fontSize: 24,
		fontWeight: '600',
		color: '#fff'
	}
});

export default Weather;