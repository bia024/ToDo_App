import React, { Component } from "react";
import styled from "styled-components";
// import Main from "./components.Main";

const Container = styled.div`
  background-color: darkred;
  width: 50vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
`;

const Titulo = styled.h1`
  color: yellowgreen;
`;
export default class ToDo extends Component {
  state = {
    tarefa: "",
    lista: []
  };

  //Essa aqui é para manipular o input
  handleChange = (event) => {
    this.setState({
      tarefa: event.target.value
    });
  };

  Adicionar = () => {
    this.setState({
      lista: this.state.lista.concat({
        tarefa: this.state.tarefa,
        id: Math.random()
        //cada id é como se fosse um cpf pra TAREFA
      }),
      tarefa: ""
    });
  };

  Remover = (id) => {
    this.setState({
      lista: this.state.lista.filter((item) => {
        return item.id !== id;
        //nessa array vazia, armazene tudo o q ta no input. remover: apagar cada cpf
      })
    });
  };
  // ou handleImput
  render() {
    return (
      <Container>
        <Titulo>Lista de Tarefas</Titulo>
        <input value={this.state.tarefa} onChange={this.handleChange} />
        <button onClick={this.Adicionar}> ok </button>
        {/* finalizado */}
        {/* {preparei o imput para receber uma tarefa} */}
        {/* <h1>{this.state.tarefa}</h1> */}
        {this.state.lista.map((item) => (
          <ul>
            <li>{item.tarefa}</li>
            <button
              onClick={() => {
                this.Remover(item.id);
              }}
            >
              Remover
            </button>
          </ul>
        ))}
      </Container>
    );
  }
}
