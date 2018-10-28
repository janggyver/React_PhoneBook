import React, { Component } from 'react';
import PhoneForm from './Component/PhoneForm';
import './App.css';
import PhoneInfoList from './Component/PhoneInfoList';

class App extends Component {

  id = 2;
  state = {
    information: [
      {
        id: 0,
        name: "John Dow",
        phone: "519-111-1111"
      },
      {
        id: 1,
        name: "Eric",
        phone: '506-888-8888'
      }
    ]
  }


  handleCreate = (data) => {
    // console.log(data);
    const {information} = this.state;
    this.setState({
      information: information.concat({id: this.id++, ...data })
    })
  }

  handleRemove = (id) => {
    const {information} = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    })
  }

  handleUpdate = (id, data) => {
    const {information} = this.state;
    this.setState({
      information: information.map(
        info => id === info.id 
        ? {...info, ...data }
        : info
      )       
    })
}

  render() {
    const {information} = this.state;
    return (
      <div>
        <PhoneForm 
          onCreate = {this.handleCreate}
        />

        {JSON.stringify(information)}
        <PhoneInfoList  
          data = {information}
          onRemove = {this.handleRemove}
          onUpdate = {this.handleUpdate} />
      </div>
    );
  }
}

export default App;
