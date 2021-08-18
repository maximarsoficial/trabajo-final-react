import React, { Component } from 'react';
import axios from 'axios';

const url = "https://backendnodejsapi.herokuapp.com/api/riojanbars/getbars";

export class HomeBarsList extends Component {

    state = {
        bars:[]
    }
    async componentDidMount() {
        this.getBarsList();
    }

    getBarsList = async () => {
        const res = await axios.get(url)
           this.setState({
               data: res.data
            });
            console.log(res)
    }
    
    render(){
        return(
            <div className="row">
                <div className="col-md-4">
                   LISTA DE BARES
                </div>
                <div className="col-md-8">
                    <ul className="list-group">
                    {/* {this.state.bars.map(lista =>{
                        {lista.name}
                        
                    })} */}
                    </ul>
                </div>
                
            </div>
        )
    }
}