import React,{Component} from  'react';

class Question extends Component{
    state={
        selected: ''
    };

    handleOptionChange=(event)=>{
        this.setState({selected: event.target.value});
    };
    handleOnClick=(event)=>{
      event.preventDefault();
      //create a report
        const {selected} = this.state;
        const {question, id, correct_answer} = this.props;
        const report = {
            questionId: id,
            question: question,
            answer: selected,
            correct_answer: correct_answer,
            isCorrect: this.isCorrect(selected, correct_answer),
            scored: this.computeScore(selected, correct_answer),
        };
        this.props.nextQuestion(report);
    };
    computeScore=(answer, correct_answer)=>{
        if(answer === correct_answer) return 10;
        return 0;
    };
    isCorrect=(answer, correct_answer)=>{
      return answer === correct_answer;
    };
    render() {
        const {question, id, answers} = this.props;
        const {selected} = this.state;
        return(
            <div className="Question shadow">
                <div className="card m-3 p-3">
                    <h5 className="card-title"><span>{id}&nbsp;</span>{question}</h5>
                    <form>
                        <div>
                            <li className="option">
                                <span className="checkmark"/>
                                <input
                                    type="radio"
                                    className="radioCustomButton"
                                    name="answerOption"
                                    checked={selected === answers[0].id}
                                    value={answers[0].id}
                                    onChange={this.handleOptionChange}
                                />
                                {answers[0].answer}
                            </li>
                        </div>
                        <div>
                            <li className="option">
                                <span className="checkmark"/>
                                <input
                                    type="radio"
                                    className="radioCustomButton"
                                    name="answerOption"
                                    checked={selected === answers[1].id}
                                    value={answers[1].id}
                                    onChange={this.handleOptionChange}
                                />
                                {answers[1].answer}
                            </li>
                        </div>
                        <div>
                            <li className="option">
                                <span className="checkmark"/>
                                <input
                                    type="radio"
                                    className="radioCustomButton"
                                    name="answerOption"
                                    checked={selected === answers[2].id}
                                    value={answers[2].id}
                                    onChange={this.handleOptionChange}
                                />
                                {answers[2].answer}
                            </li>
                        </div>
                    </form>
                </div>
                {selected===''?<button type="submit" className="btn btn-danger" onClick={this.handleOnClick} disabled>Next Question</button>:
                <button type="submit" className="btn btn-danger" onClick={this.handleOnClick}>Next Question</button>}
            </div>
        )
    }
}

export default Question;