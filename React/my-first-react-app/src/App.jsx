import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { use } from 'react'

import { Component } from "react";

class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      inputVal: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
  }

  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((state) => ({
      todos: state.todos.concat(state.inputVal),
      inputVal: "",
    }));
  }
  handleDelete(index) {
    this.setState((prevState)=>{
      const newTodos = [...this.state.todos]
      newTodos.splice(index,1)
      return {todos: newTodos}
    })
  }
  handleEdit(index,newValue){
    this.setState((prevState)=>{
      const newTodos = [...prevState.todos]
      newTodos[index] = newValue
      return {todos:newTodos}
  })
  }
  render() {
    return (
      <section>
        <h3>{this.props.name}</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            name="task-entry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <h4>All the tasks!</h4>
        <ul>
          {this.state.todos.map((todo,index) => (
              <Edit key={index}
                    todo={todo} 
                    index={index}
                    handleDelete={this.handleDelete} 
                    handleEdit = {this.handleEdit}/>
           
          ))}
        </ul>
        <Count todos={this.state.todos}/> 
      </section>
      
    );
  }
}

class Count extends Component{
  render(){
    return(
      <p>
        There are {this.props.todos.length} todos
      </p>
    )
  }
}

class Edit extends Component{
  constructor(props){
    super(props)
    this.state = {
      edit: false,
      inputVal: this.props.todo
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.toggleView = this.toggleView.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  toggleView(){
    this.setState((state)=>({edit:!state.edit}))
  }
  handleSubmit(e){
    e.preventDefault()
    this.props.handleEdit(this.props.index,this.state.inputVal)
    this.toggleView()
  }
  handleInputChange(e){
    this.setState({inputVal: e.target.value})
  }
  render(){
    if(!this.state.edit){
      return(
      <li key={this.props.todo}>{this.props.todo}
      <button onClick={this.toggleView}>Edit</button>
      <button onClick={()=>this.props.handleDelete(this.props.index)}>Delete</button>
    </li>
      )
    }else{
      return(
        <form onSubmit={this.handleSubmit}>
          <li>
          <input
            type="text"
            name="task-rentry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button type="submit">Resubmit</button>
          </li>
          
        </form>
      )
    }
    
  }
}

function App(){
  return(
      <ClassInput/>
  )
}

export default ClassInput;