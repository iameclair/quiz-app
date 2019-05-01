import React,{Component} from  'react';
import {connect} from "react-redux";

import data from '../server/db';
import '../styles/App.scss';
import Question from "./Question";
import {QuestionAction} from "../actions";

class App extends Component{
  state={
    qno:0,
    length: 0,
    questions:[],
    reports:[],
  };
  componentDidMount() {
    const json_data = data;
    this.setState({
      qno:0,
      length: json_data.length,
      questions: [...this.state.questions, json_data]
    })
  }
  updateReport=(update)=> {
    const newReports = [...this.state.reports, update];
    this.setState({reports:newReports})
  };
  nextQuestion =(update)=>{
    this.updateReport(update);
    const {qno} = this.state;
    this.setState({qno:qno+1});
  };
  renderQuestion=(question)=>{
    return<Question id={question.id}
                    question={question.question}
                    answers={question.answers}
                    correct_answer={question.correct_answer}
                    nextQuestion={this.nextQuestion}/>
  };
  renderQuestions=(questions, index)=>{
    return questions.map((question)=>
            <div key={question[index].id}>
                {this.renderQuestion(question[index], index)}
            </div>
    );
  };
  handleSubmitAnswers=(event)=>{
    event.preventDefault();
    const {reports} = this.state;
    this.props.postAnswers(reports);
  };
  render() {
    const {questions} = this.state;
    const {length} = this.state;
    return(
        <div className="App container">
          <h1>The App</h1>
          {this.state.qno <= length-1? this.renderQuestions(questions, this.state.qno):
              <button type="submit" onClick={this.handleSubmitAnswers} className="btn btn-success btn-block">
                Quiz finished Submit Answers</button>
          }
        </div>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) =>{
  return{
    postAnswers:(data)=>{
      dispatch(QuestionAction.postAnswers(data, ownProps));
    }
  }
};

const mapStateToProps = state =>{
  return{
    questions:state.questions
  }
};


export default connect(mapStateToProps,mapDispatchToProps)(App);
