import {
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE
} from '../actions'





const initialState = {
    records: null,
    isLoading: false,
    error: '',
}

export const reducer = (state = initialState, action) => {
    console.log('action', action)
    switch (action.type) {
        case FETCH_DATA_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case FETCH_DATA_SUCCESS:
            return{
                ...state,
                isLoading: false,
                records: action.payload,
                error: ''
            }
        case FETCH_DATA_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: ''
            }
    default:
        return state;
    }
}