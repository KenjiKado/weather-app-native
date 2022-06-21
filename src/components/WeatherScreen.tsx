import React, { useCallback, useEffect } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as Location from 'expo-location';
import * as Localization from 'expo-localization';
import Loading from './Loading';
import Weather from './Weather';
import { useWeatherSelector } from '../store/selectors';
import { useDispatch } from 'react-redux';
import { fetchWeather } from '../store/actions';

const WeatherScreen = () => {
	const dispatch = useDispatch();
	const { temp, feelsLike, loading, condition, location } = useWeatherSelector()

	useEffect(() => {
		getWeather();
	}, []);

	const getWeather = useCallback(async () => {
		try {
			let { granted } = await Location.requestForegroundPermissionsAsync();
			if (!granted) {
				Alert.alert('Permission to access location was denied');
				return;
			}
			const { coords: { longitude, latitude } } = await Location.getCurrentPositionAsync({});
			if (longitude && latitude) {
				dispatch(fetchWeather({ latitude, longitude, region: Localization.region }))
			}
		} catch (e) {
			Alert.alert("Произошла ошибка получения данных");
		}
	}, [])

	return (
		<View style={styles.container}>
			{loading ?
				<Loading /> :
				<View style={styles.dataBlock}>
					<Weather temp={temp} condition={condition?.main} location={location} feelsLike={feelsLike} />
				</View>
			}
			<StatusBar style="auto" />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	dataBlock: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
});

export default WeatherScreen;