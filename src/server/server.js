import data from './db.json';

function Post(reports) {
    for(let report of reports){
        for(let item of data){
            if(report.questionId === item.id){
                for(let answer of item.answers){
                    if(answer.id === report.answer){
                        report.your_answer = answer.answer;
                        break;
                    }
                }
                for(let answer of item.answers){
                    if(answer.id === item.correct_answer){
                        report.the_correct_answer = answer.answer;
                        break;
                    }
                }
                break;
            }
        }
    };
    return {
        summary: reports,
        total_score: computeTotalScore(reports)
    };
}
function computeTotalScore(data){
    let total_score = 0;
    for(let report of data){
        total_score+=report.scored;
    }

    return {total_score};
}
export const Api = {
    Post
};
