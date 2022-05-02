import React, {Component} from "react";

export default class Modal extends Component{

    constructor(props){
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    handleSubmit(event){
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
        this.props.onUpdate(this.state.value);
        this.onClose(event);
    }

    render(){
        if(!this.props.show){
            return null;
        }
        else{
            return (
                <div>
                    <form onSubmit={this.handleSubmit}>        
                        <label>
                            Name:
                            <input type="text" value={this.state.value} onChange={this.handleChange} />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                    <button onClick={e => { this.onClose(e); }}>Close</button>
                </div>
            );
        }
    }

    onClose = e => {
        this.props.onClose && this.props.onClose(e);
    }
}