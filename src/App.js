import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import Card from './Components/Card/Card'
import Form from './Components/Form/Form'


class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      pets: []
    }
  }

  componentDidMount() {
    this.getPets()
  }

  getPets = () => {
    axios.get(`/api/pets`).then(res => {
      this.setState({
        pets: res.data
      })
    })
  }

  deletePet = (id) => {
    axios.delete(`/api/delete/${id}`).then(res => {
      this.setState({
        pets: res.data
      })
    })
  }

  createPet = (petInfo) => {
    axios.post('/api/create', petInfo).then(res => {
      this.setState({
        pets: res.data
      })
    })
  }

  updatePet = (id, petInfo) => {
    axios.put(`/api/update/${id}`, petInfo).then(res => {
      this.setState({
        pets: res.data
      })
    })
  }

  render(){
    const mappedPets = this.state.pets.map(pet => {
      return (
      <Card 
      pet={pet} 
      key={pet.id} 
      update={this.updatePet}
      delete={this.deletePet} />
      )
    })
    return(
      <div className="app-main">
        <h1 className='header'>Pets</h1>
        <Form create={this.createPet} />
        <div>{mappedPets}</div>
      </div>
    )
  }
}

export default App;

//console.log('test')