import React from 'react';
import axios from 'axios';
import './App.css';
import UsersList from './components/Users';
import Menu from './components/Menu'
import Footer from './components/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ProjectsList from './components/Project';
import ToDoList from './To-Do';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      'users': [],
      'projects': [],
      'todoList': [],
    }
  }
  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/user/', {
    }).then(response => {
      console.log(response.data)
      const users = response.data
      this.setState({ 'users': users })
    }).catch(error => console.log(error));

    axios.get('http://127.0.0.1:8000/api/project/', {
    }).then(response => {
      console.log(response.data.results)
      const projects = response.data.results
      this.setState({ 'projects': projects })
    }).catch(error => console.log(error));

    axios.get('http://127.0.0.1:8000/api/TODO/', {
    }).then(response => {
      console.log(response.data.results)
      const todoList = response.data.results
      this.setState({ 'todoList': todoList })
    }).catch(error => console.log(error))
  }
  render() {
    return (
      <div className="App" >
        <BrowserRouter>
          <Menu />
          <Switch>
            <Route exact path="/" component={() => <ProjectsList projects={this.state.projects} />} />
            <Route exact path="/to-dos" component={() => <ToDoList todo={this.state.todoList} />} />
            <Route exact path="/users" component={() => <UsersList users={this.state.users} />} />
          </Switch>
        </BrowserRouter>
        <Footer id='footer' />
      </div>
    );
  }
}



export default App;
