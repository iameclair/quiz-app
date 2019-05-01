const answerStateInit ={
    loading:false,
    data:[],
    error: null
};

const reportReducer = (state = answerStateInit, action) =>{
    switch (action.type) {
        case "POST_ANSWERS":
            return{
                loading:true,
            };
        case "POST_ANSWERS_SUCCESS":
            return{
                loading: false,
                data: action.payload
            };
        case "POST_ANSWERS_FAILURE":
            return{
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export const Reducers ={
    reportReducer,
};