import './container.css'
import React from 'react'
import { ReactDOM } from 'react';
import { Component, useEffect, useState,  } from 'react';
import Modal from './modal';
import {supabase} from '../helpers/supabaseClient';
import { ReactSession } from 'react-client-session';
//This component will hold information for a song to be practiced. perhaps subclass this?
class Container extends Component{

    constructor(props){
        super(props);
        this.title = props.title;
        this.listOfItems = props.listOfItems;
        this.id = props.id

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

    async AddNewItem(item){
        this.listOfItems.push(item);
        const {data, error} = await supabase
            .from('material')
            .insert([{owner: ReactSession.get('userid'), 
                    title: item.name, 
                    form: item.form, 
                    notes: 
                    item.notes, 
                    type: this.id
                }])
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
            id: super.id,

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
        super.AddNewItem(new NewMaterialItem(this.id, name, form, notes));

    }
}

class ModalItem{
    name;
}

class NewMaterialItem{
    constructor(id = 1, name, form, notes){
        this.id = id;
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