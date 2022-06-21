import React from 'react';
import { Provider } from 'react-redux';
import WeatherScreen from './src/components/WeatherScreen';
import { store } from './src/store/store';


const App = () => {
	return (
		<Provider store={store}>
			<WeatherScreen />
		</Provider>
	)
}

export default App;