import * as ActionTypes from './ActionTypes';

export const comments1 = (state={
	errMess:null,isLoading:false,comments:[]
	},action)=>{
	
	switch(action.type){
		
		case ActionTypes.ADD_COMMENT :
			var comment = action.payload;
			return {...state,errMess:null,isLoading:false,comments:state.comments.concat(comment)};
			
		case ActionTypes.ADD_COMMENTS :
			return {...state,errMess:null,isLoading:false,comments:action.payload}              //... spread opertaor current value of state

		case ActionTypes.COMMENTS_FAILED:
			return {...state,isLoading:false,errMess:action.payload,comments:[]}              //... spread opertaor current value of state

		default:
			return state;
	}
	
	
}