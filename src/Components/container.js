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
            <h1>{this.title}</h1>
        );
    }    
    CreateListOfItems(){
        return (
            <div>
                {this.CreateTitleBar()}
                <ul>
                    {this.listOfItems.map((item) =>
                        <li className='NewMaterial' key={item.name}>
                            {item.name} is at postition {item.index}
                        </li>
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

class NewMaterial extends Container{

    constructor(props){
        super(props);
        this.state = {
            listofItems: super.listOfItems,
            showModal: false
        };
        this.AddNewItem = this.AddNewItem.bind(this);
    }
    render() {
        //fetch from database or somewhere
        return (
            <div>
                {super.CreateListOfItems()}
                <button onClick={e => {this.ShowModal(e);}}>Show Modal</button>
                {<Modal onClose = {this.ShowModal} show = {this.state.showModal}>Message</Modal>}
            </div>
        )
    }

    ShowModal = e =>{
        this.setState({
            listOfItems: this.listOfItems,
            showModal: !this.state.showModal,
        })
    }

    // AddNewItem(e){
    //     this.setState({listOfItems: this.listOfItems.push(new NewMaterialItem('test', '4'))})
    // }
}


class NewMaterialItem{
    constructor(name, index){
        this.name = name;
        this.index = index;
        
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
    NewMaterial,
    NewMaterialItem,

}