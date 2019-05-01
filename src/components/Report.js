import React, {Component} from 'react';
import {connect} from "react-redux";
import '../styles/Report.scss'

class Report extends Component {

    renderSummary = (summary) => {
        return summary.map((item, index) => <div key={index}>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>Question</th>
                    <th>{item.question}</th>
                </tr>
                </thead>
                <tbody>
                <tr className={item.isCorrect ? `bg-success` : `bg-danger`}>
                    <td>Your Answer</td>
                    <td>{item.your_answer}</td>
                </tr>
                <tr>
                    <td>Correct Answer</td>
                    <td>{item.the_correct_answer}</td>
                </tr>
                <tr>
                    <td>Point Scored</td>
                    <td>{item.scored}</td>
                </tr>
                </tbody>
            </table>
        </div>)
    };

    render() {
        const {loading, data, error} = this.props.reports;
        const {total_score, summary} = data;
        if (loading) {
            return <h1>loading...</h1>
        }
        if (error) {
            return <h1>error</h1>
        }
        return (
            <div className="Report container">
                <h1>Summary</h1>
                {this.renderSummary(summary)}
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th style={{"backgroundColor": "#13215b", "color":"#F3CB00"}}>Score</th>
                            <th style={{"backgroundColor": "#F3CB00", "color":"#13215B"}}>{total_score.total_score}</th>
                        </tr>
                    </thead>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        reports: state.reports
    }
};

export default connect(mapStateToProps, null)(Report);

