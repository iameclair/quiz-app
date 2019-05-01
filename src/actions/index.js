import {QuestionService} from "../services";
import {utilities} from "../helpers";

const postAnswers =(data, ownProps)=>{
   return dispatch =>{
        dispatch(utilities.request("POST_ANSWERS", data));
       QuestionService.postAnswers(data)
            .then(data=>{
                dispatch(utilities.success("POST_ANSWERS_SUCCESS", data))
                setTimeout(()=>{
                    ownProps.history.push(`/report`)
                },2000)
            }).catch(error=>{
                dispatch(utilities.failure("POST_ANSWERS_FAILURE", error))
        })
   };
};

export const QuestionAction = {
  postAnswers
};
