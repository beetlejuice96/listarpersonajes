import React, { Component } from "react";
import PersonajeCard from "./personajeCard";
import './App.css';

class App extends Component{

  state = {
    personajes:[],
    cantidadPersonajes:null,
    cantidadLocaciones:null,
    cantidadEpisodios:null,
  }

  componentDidMount() {
      fetch('https://rickandmortyapi.com/api/character')
          .then(res => res.json())
          .then((data)=>{
              this.setState({
                  cantidadPersonajes:data.info.count,
              })
          })
      fetch('https://rickandmortyapi.com/api/location')
          .then(res=>res.json())
          .then((data)=>{
              this.setState({
                  cantidadLocaciones:data.info.count,
              })
              console.log(this.state.cantidadLocaciones)
          })
      fetch('https://rickandmortyapi.com/api/episode')
          .then(res=>res.json())
          .then((data)=>{
              this.setState({
                  cantidadEpisodios:data.info.count,
              })
              console.log(this.state.cantidadEpisodios)
          })


  }

    nuevoPersonaje=()=> {
    const newRandom = Math.floor(Math.random() * (671- 1)) + 1;
    const personajes = this.state.personajes.slice();
    let url =`https://rickandmortyapi.com/api/character/${newRandom}`;
    fetch(url)
        .then(res => res.json())
        .then((personajeCard) => {
          personajes.push(personajeCard)
          this.setState({
            personajes:personajes,
          });
        })
        .catch(console.log)
  }


  render() {
    return(
        <React.Fragment>
            <header className="header-body text-center">
                    <h1>The Rick and Morty</h1>
                    <h3>Cantidad de episodios: {this.state.cantidadEpisodios}</h3>
                    <h3>Cantidad de locaciones : {this.state.cantidadLocaciones}</h3>
                    <h3>Cantidad de personajes: {this.state.cantidadPersonajes}</h3>
            </header>
            <div className="text-center">

              <button onClick={this.nuevoPersonaje} type="button" className="btn btn-primary btn-sm">
                Add new figure
              </button>
              <div className="row d-flex justify-content-center mt-2">
                {this.state.personajes.map((personajeCard,i) =>{
                    console.log(i);
                  return(
                      <PersonajeCard
                        img = {personajeCard.image}
                        name = {personajeCard.name}
                        key={i}
                      >
                      </PersonajeCard>
                  )
                })}
              </div>
            </div>
        </React.Fragment>
    )
  }

}

export default App;
