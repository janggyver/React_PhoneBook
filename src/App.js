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
    ],
    keyword: ''
  }


  handleChange = (e) => {
    this.setState({
      keyword: e.target.value
    });
  }

  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data })
    })
  }
  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    })
  }
  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map(
        info => id === info.id
          ? { ...info, ...data } 
          : info //maintaint the existing values
      )
    })
  }

  render() {
    const { information, keyword } = this.state;
    const filteredList = information.filter(
      info => info.name.indexOf(keyword) !== -1
    );
    return (
      <div>
        <PhoneForm
          onCreate={this.handleCreate}
        />
        <p>
            <input 
              placeholder = 'Name to search' 
              onChange = {this.handleChange}
              value = {keyword} />
        </p>
        <hr />
        <PhoneInfoList 
          data={filteredList}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default App;
