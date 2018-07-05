import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import{createStore,applyMiddleware} from 'redux';
import appReducers from '../src/Reducers/index.Reducer';
import{Provider} from 'react-redux';
import rootSaga from './Saga/index';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
	appReducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
	applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);
ReactDOM.render(
    <Provider store = {store}>
	<App />
	</Provider> ,
    document.getElementById('root')
);
registerServiceWorker();
