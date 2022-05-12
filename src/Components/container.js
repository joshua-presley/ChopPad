import './container.css'
import React from 'react'
import { ReactDOM } from 'react';
import { Component, useEffect, useState,  } from 'react';
import Modal from './modal';


//This component will hold information for a song to be practiced. perhaps subclass this?
class Container extends Component{

    constructor(props){
        super(props);
        this.title = props.title;
        this.listOfItems = props.listOfItems;

    }

    CreateTitleBar(){
        return (
            <h1 className='title'>{this.title}</h1>
        );
    }    
    CreateListOfItems(){
        return (
            <div>
                {this.CreateTitleBar()}
                <ul>
                    {this.listOfItems.map((item) =>
                    <div className='container' key={item.name}>
                        <li>
                            <p className='label'>Title: {item.name}</p>
                        </li>
                        <li>
                            <p className='label'>Form: {item.form}</p>
                        </li>
                        <li>
                            <p className='label'>Notes: {item.notes}</p>
                        </li>
                    </div>
                        
                    )}
                </ul>
            </div>
        )
    }

    AddNewItem(item){
        this.listOfItems.push(item);
    }
    
    render(){
        return <Container CreateTitleBar={this.CreateTitleBar()}/>
    }

    


}

class Material extends Container{

    constructor(props){
        super(props);
        this.state = {
            listofItems: super.listOfItems,
            show: false,
            name: '',

        };
        this.AddNewItem = this.AddNewItem.bind(this);
    }
    render() {
        //fetch from database or somewhere
        return (
            <div >
                {super.CreateListOfItems()}
                <button onClick={e => {this.ShowModal(e);}}>Show Modal</button>
                {<Modal onClose = {this.ShowModal} show = {this.state.show} onUpdate={this.AddNewItem}>
                    
                </Modal>}
            </div>
        )
    }

    ShowModal = e => {
        this.setState({
            listOfItems: this.listOfItems,
            show: !this.state.show,

        });
    }

    
    AddNewItem(name, form, notes){
        super.AddNewItem(new NewMaterialItem(name, form, notes));
    }
}

class ModalItem{
    name;
}

class NewMaterialItem{
    constructor(name, form, notes){
        this.name = name;
        this.form = form;
        this.notes = notes;
    }
}

class DevelopingMaterial extends Container{
    constructor(props){
        super(props);
    }

    

    render(){
        return (
            <div>
                {super.CreateListOfItems()}
            </div>
        );
    }
    
}

export {
    Container,
    Material,
    NewMaterialItem,

}