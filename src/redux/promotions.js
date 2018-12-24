import * as ActionTypes from './ActionTypes';


export const promotions1=(state={
	errMess:null,isLoading:false,promotions:[]
	},action)=>{
	switch(action.type) {
		
		case ActionTypes.ADD_PROMOS :
			return {...state,errMess:null,isLoading:false,promotions:action.payload}              //... spread opertaor current value of state

		case ActionTypes.PROMOS_LOADING :
			return {...state,errMess:null,isLoading:true,promotions:[]}              //... spread opertaor current value of state
		
		case ActionTypes.PROMOS_FAILED:
			return {...state,errMess:action.payload,isLoading:false,promotions:[]}              //... spread opertaor current value of state

		default :
			return state;
	}
	
}