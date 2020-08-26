import React from 'react';
import axios from 'axios'
import { Header, Icon, List } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

class App extends React.Component {
  state = {
    values: []
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/values')
      .then(response => {
        this.setState({
          values: response.data
        })
      })
  }

  render() {
    return (
      <>
        <Header as='h2'>
          <Icon name='users' />
          <Header.Content>Social Network</Header.Content>
        </Header>

        <List>
          {this.state.values.map((value: any) => (
            <List.Item key={value.id}>{value.name}</List.Item>
          ))}            
        </List>
      </>
    );
  }
}

export default App;
