import * as ActionTypes from './ActionTypes.js';

export const dishes1 = (state={
	errMess:null,
	isLoading:true,
	dishes:[]
	},action)=>{
	
	switch(action.type){
		
		case ActionTypes.ADD_DISHES :
			return {...state,errMess:null,isLoading:false,dishes:action.payload}              //... spread opertaor current value of state

		case ActionTypes.DISHES_LOADING :
			return {...state,errMess:null,isLoading:true,dishes:[]}              //... spread opertaor current value of state
		
		case ActionTypes.DISHES_FAILED:
			return {...state,errMess:action.payload,isLoading:false,dishes:[]}              //... spread opertaor current value of state

		
		default :
	       return state;	
	}
	
}