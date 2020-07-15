import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
      this.state = {
        user: [],
        followers: []
      }
  }

  componentDidMount() {
      console.log("mount working")
      fetch('https://api.github.com/users/kthaovd13')
        .then(response => response.json())
        .then(response => {
          console.log(response.data);
          this.setState({ user: response.data })})
        .catch(err => console.log('errors in API request'));
  
      fetch('https://api.github.com/users/kthaovd13/followers')
        .then(response => response.json())
        .then(response => this.setState({ followers: response.data}))
        .catch(err => console.log('errors in API followers request'));
  }

    render() {
      return (
        <div className="App">
          <h1>Github Card Followers</h1>
        </div>
        );
    }
}

export default App;
