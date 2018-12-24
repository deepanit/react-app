import {createStore,combineReducers,applyMiddleware} from 'redux';
import {createForms} from 'react-redux-form';
import {dishes1} from './dishes';
import {comments1} from './comments';
import {promotions1} from './promotions';
import {leaders1} from './leaders';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {InitialFeedback} from './forms';

export const ConfigureStore = ()=> {
	
	const store = createStore(
	combineReducers({
		dishes:dishes1,
		comments:comments1,
		promotions:promotions1,
		leaders:leaders1,
		...createForms({
			feedback:InitialFeedback
		})
	}),
	applyMiddleware(thunk,logger) //return store enhancer( supplied to store )
	);
	
	
	return store;
}