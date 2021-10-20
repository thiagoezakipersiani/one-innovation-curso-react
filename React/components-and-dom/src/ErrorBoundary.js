import React, {Component} from "react";
import  imgError from "./img-error.jpg";

class ErrorBoundary extends Component {

    constructor(props){
        super(props);
        this.state = {
            hasError:false
        }
    }

    componentDidCatch(error, errorInfo){
        this.setState ({
            hasError:true
        })
    }

    render(){
        if(this.state.hasError){
            return <img src={imgError}/>
        }
        return this.props.children
    }
}

export default ErrorBoundary;
