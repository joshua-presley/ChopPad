import React, {Component} from "react";

export default class Modal extends Component{

    constructor(props){
        super(props);
        this.state = {
            name: '',
            form: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event){
        const value = event.target.value;
        this.setState({
            ...this.state,
            [event.target.name]: value,
        }
        );
    }

    handleSubmit(event){
        alert('A name was submitted: ' + this.state.name);
        event.preventDefault();
        this.props.onUpdate(this.state.name, this.state.form);
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
                            <br/>
                            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                            <br/>
                            Form:
                            <br/>
                            <input type="text" name="form" value={this.state.form} onChange={this.handleChange} />
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