import React, {Component} from 'react';
import './Form.css'

class Form extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: '',
            imageURL: '',
            age: '', 
            breed: ''
        }
    }

    handleChange = (e) => {
        let {value, name} = e.target
        this.setState({
            [name] : value
        })
    }

    handleClick = () => {
        let {name, imageURL, age, breed } = this.state
        this.props.create(
            {
             name,
             imageURL, 
             age, 
             breed })
        this.setState({
            name: '',
            imageURL: '',
            age: '',
            breed: ''
        })
    }

    render(){
        console.log(this.state)
        return(
            <div className='add-form'>
                <section className='input-section'>
                <input
                className='add-form-input'
                type="text"
                name="name"
                value={this.state.name}
                placeholder="Name"
                onChange={this.handleChange}
                />
                <input
                className='add-form-input'
                type="text"
                name="imageURL"
                value={this.state.imageURL}
                placeholder="imageURL"
                onChange={this.handleChange}
                />
                <input
                className='add-form-input'
                type="text"
                name="age"
                value={this.state.age}
                placeholder="age"
                onChange={this.handleChange}
                />
                <input
                className='add-form-input'
                type="text"
                name="breed"
                value={this.state.breed}
                placeholder="breed"
                onChange={this.handleChange}
                />
                <button onClick={this.handleClick}>Add</button>
                </section>
            </div>
        )
    }
}

export default Form