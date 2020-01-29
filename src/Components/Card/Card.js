import React, {Component} from 'react';
import CardInfo from '../CardInfo/CardInfo'
import EditCard from '../EditCard/EditCard'

class Card extends Component {
    constructor(props){
        super(props)

        this.state = {
            edit: false
        }
    }

    toggleEdit = () => {
        let edit = this.state.edit
        this.setState({
            edit: !edit
        })
    }
    
    render(){
        return(
            <div>
                {
                    this.state.edit 
                    ? 
                    <EditCard {...this.props} toggle={this.toggleEdit} />
                    :
                    <CardInfo {...this.props} toggle={this.toggleEdit} />
                }
               
            </div>
        )
    }
}

export default Card