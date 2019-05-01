import React, {Component} from 'react'
/*
    This error boundary catches when the error occurs when trying to navigate to the /report route without completing the quiz
    To trigger this error try to navigate manually to localhost:3000/report
 */
class ErrorBoundary extends Component{
    state={
        hasError: false
    };
    static getDerivedStateFromError(error){
       return{
           hasError: true
       }
    }
    componentDidCatch(error, errorInfo) {
        console.log("Error: ", error);
        console.log("Info: ", errorInfo);
    }

    render() {
        if(this.state.hasError){
            return (
                <div style={{"backgroundColor":"#13215b", "color":"#F3CB00", "width":"100%", "height":"100%"}}
                     className="d-flex align-items-center justify-content-center">
                    <h1 className="text-center text-justify">
                        Oops Something might have gone wrong please refresh your browser
                    </h1>
                </div>
            )
        }
        return this.props.children
    }
}

export default ErrorBoundary