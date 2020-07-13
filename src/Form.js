import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            userInput: '',
            name: '',
            isShowing: false
        }
        console.log(props);
    }

    handleChange(event){
        this.setState({
            userInput: event.target.value
        });
    }

    handleClick(event){
        // if (this.state.userInput === ''){
        //     this.setState({
        //         isShowing: false
        //     });
        // } else {
        //     this.setState({
        //         name: this.state.userInput,
        //         userInput: '',
        //         isShowing: true,
        //     });
        // }
        if (this.state.userInput !== ''){
            this.setState({
                name: this.state.userInput,
                userInput: '',
                isShowing: true,
            });
        }
    }
    
    handleKeyPress(event){
        if (event.key === 'Enter'){
            this.handleClick(event);
        }
    }

    handleReset(event){
        this.setState({
            isShowing: false
        })
    }

    render() {
        return (
            <div>
                <p>{this.props.question}</p>
                <input 
                    onChange={event => this.handleChange(event)}
                    onKeyPress={event => this.handleKeyPress(event)}
                    value={this.state.userInput}
                />
                <button onClick={event => this.handleClick(event)}>
                    Submit
                </button>
                <button onClick={event => this.handleReset(event)}>
                    Reset
                </button>

                {this.state.isShowing && <p>
                    {this.props.greeting}, {this.state.name}
                </p>}
            </div>
        )    
    }
}

export default Form;