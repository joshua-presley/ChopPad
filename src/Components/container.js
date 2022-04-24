import './container.css'
import { Component } from 'react';

//This component will hold information for a song to be practiced. perhaps subclass this?
class Container extends Component{

    constructor(props){
        super(props);
        this.title = props.title;
    }

    CreateTitleBar(){
        return (
            <h1>{this.title}</h1>
        );
    }    
    CreateListOfItems(items){
        return (
            <div>
                {super.CreateTitleBar()}
                <ul>
                    {items.map((item) =>
                        <li className='NewMaterial' key={item.name}>
                            {item.name} is at postition {item.index}
                        </li>
                    )}
                </ul>
            </div>
        )
    }
    render(){
        return <Container CreateTitleBar={this.CreateTitleBar()}/>
    }


}

class NewMaterial extends Container{

    constructor(props){
        super(props);
        this.listOfItems = props.listOfItems
    }

    render() {
        //fetch from database or somewhere
        return (
            <div>
                {super.CreateTitleBar()}
                {super.CreateListOfItems(this.listOfItems)}
            </div>
        )
    }
}

class NewMaterialItem{
    constructor(name, index){
        this.name = name;
        this.index = index
    }

}

export {
    Container,
    NewMaterial,
}