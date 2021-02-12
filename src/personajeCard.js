import React, { Component } from "react";


class PersonajeCard extends Component{


    render(){
        return(
            <div className="card col-3 text-center ms-5 mt-2 " >
                <img className='poncho' src={this.props.img} alt=""/>
                <div className="card-body">
                    <h5 >{this.props.name}</h5>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default PersonajeCard;