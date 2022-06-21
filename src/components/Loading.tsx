import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Loading = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Получение погоды...</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center',
		paddingVertical: 50,
		backgroundColor: '#FDF6AA'
	},
	text: {
		fontSize: 30,
		color: '#2c2c2c'
	}
})

export default Loading;