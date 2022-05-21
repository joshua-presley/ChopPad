import './container.css'
import React from 'react'
//import { ReactDOM } from 'react';
import { Component, } from 'react';
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

    

    async AddNewItem(item){
        this.listOfItems.push(item);
        console.log('adding')
        await supabase
            .from('material')
            .insert([{owner: ReactSession.get('userid'), 
                    title: item.name, 
                    form: item.form, 
                    notes: 
                    item.notes, 
                    type: this.id
                }])
    }

    removeItem(item){
    }
    
    render(){
        return <Container CreateTitleBar={this.CreateTitleBar()}/>
    }

    


}

class Material extends Component{

    constructor(props){
        super(props);
        this.state = {
            listofItems: props.listOfItems,
            show: false,
            name: this.props.title,
            id: props.id,
        };
        this.AddNewItem = this.AddNewItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }
    render() {
        //fetch from database or somewhere
        return (
            <div >
                {this.CreateListOfItems(this.removeItem)}
                <button onClick={e => {this.ShowModal(e);}}>Show Modal</button>
                {<Modal onClose = {this.ShowModal} show = {this.state.show} onUpdate={this.AddNewItem}>
                    
                </Modal>}
            </div>
        )
    }

    ShowModal = e => {
        this.setState({
            listofItems: this.state.listofItems,
            show: !this.state.show,

        });
    }

    
    async AddNewItem(name, form, notes){

        console.log('adding')
        console.log(this.state.id);

        const item = new NewMaterialItem(this.state.id, name, form, notes);
        this.setState ({
            listofItems: this.state.listofItems.push(item),

        })
        await supabase
            .from('material')
            .insert([{owner: ReactSession.get('userid'), 
                    title: item.name, 
                    form: item.form, 
                    notes: item.notes, 
                    type: item.id
                }])
    }

    async removeItem(item){
        try{
            
            this.setState({
                listofItems: this.state.listofItems.filter(x => x.name !== item.name),
            });
            console.log('remove ' + ReactSession.get('userid') + ' ' + item.id + ' ' + item.name);
            await supabase
                .from('material')
                .delete()
                .match({ owner: ReactSession.get('userid'), type: item.id, title: item.name });
        }
        catch(error){
            console.log(error)
        }
    }

    CreateTitleBar(){
        return (
            <h1 className='title'>{this.state.name}</h1>
        );
    }    
    CreateListOfItems(onRemove){
        return (
            <div>
                {this.CreateTitleBar()}
                <ul>
                    {this.state.listofItems.map((item) =>
                    <div className='container' key={item.name}>
                        <button onClick={() => onRemove(item)} className="deleteButton">X</button>
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

}



class NewMaterialItem{
    constructor(id, name, form, notes){
        this.id = id;
        this.name = name;
        this.form = form;
        this.notes = notes;
    }
}


export {
    Container,
    Material,
    NewMaterialItem,

}