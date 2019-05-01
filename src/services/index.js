import {Api} from "../server/server";

async function postAnswers(data){
    return await Api.Post(data);
};

export const QuestionService = {
    postAnswers
};