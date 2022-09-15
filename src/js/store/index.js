import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/index';
import { forbiddenWordsMiddleware } from '../middleware';
import createSagaMiddleware from 'redux-saga';
import apiSaga from '../sagas/api-saga';

const initialiseSagaMiddleware = createSagaMiddleware();

const storeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_|| compose;


const store = createStore(
    rootReducer, 
    storeEnhancers(applyMiddleware(forbiddenWordsMiddleware, initialiseSagaMiddleware))
    );

initialiseSagaMiddleware.run(apiSaga);
    
export default store;