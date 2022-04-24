import './container.css'
import { Component } from 'react';

//This component will hold information for a song to be practiced. perhaps subclass this?
class Container extends Component{

    constructor(props){
        super(props);
        this.name = props.name;
        this.position = props.position;
    }

    render(){
        return (
            <div className="container">
                <p className="title">{this.name} is at postion {this.position}</p>
            </div>
        );
    }
}

class NewMaterial extends Container{

    constructor(props){
        super(props);
    }

    render(){
        //fetch from database or somewhere
        const items = [new NewMaterialItem('test', '1'), new NewMaterialItem('test1', '2'), new NewMaterialItem('test2', '3')]
        return (
            <ul className='NewMaterial'>
                {items.map((item) =>
                    <li key={item.name}>
                        {item.name} is at postition {item.index}
                    </li>
                )}
            </ul>
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