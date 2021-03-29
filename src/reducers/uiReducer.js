import { types } from '../types/types';

const initialState= {
    loading: false,
    msgError: null,
}

export const uiReducer = (state = initialState, action) => {

    switch (action.payload) {
        case types.uiSetError:
            return {
                ...state,
                msgError:action.payload

            };
        case types.uiRemoveError:
            return{
                ...state,
                msgError:null,
            }
        case types.uiStartLoading:
            return {
                loading:true,
                ...state,
            }
        case types.uiFinishLoading:
            return {
                loading:false,
                ...state,
            }
   
    
        default:
            return state;
    }
  
}
