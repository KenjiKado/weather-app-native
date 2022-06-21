import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer';
import { saga } from './saga';

function configureStore(initialState?: any) {
	const sagaMiddleware = createSagaMiddleware();

	const middlewares = [
		sagaMiddleware
	];

	const store = createStore(
		reducer,
		initialState,
		composeWithDevTools(applyMiddleware(...middlewares)),
	);

	sagaMiddleware.run(saga);

	return store;
}

export const store = configureStore();