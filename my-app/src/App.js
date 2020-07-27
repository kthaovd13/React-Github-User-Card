import React from 'react';
import './App.css';
import UserCard from './UserCard';
import OtherCard from './OtherCard';

class App extends React.Component {
  constructor() {
    super();
      this.state = {
        // data: {},
        user: [],
        followers: []
      }
  }


  // componentWillMount () {
  //   fetch(`https://api.github.com/users/${this.state.user}/followers`)
  //     .then(response => response.json())
  //     .then(response => {
  //         console.log(response.data);
  //         this.setState({ followers: response })})
  //       .catch(err => console.log('errors in API request'));
  // }

  componentDidMount() {
      console.log("mount working")
      fetch(`https://api.github.com/users/kthaovd13`)
        .then(response => response.json())
        .then(response => {
          console.log(response);
          this.setState({ user: response })})
        .catch(err => console.log('errors in API request'));
  

      fetch(`https://api.github.com/users/kthaovd13/followers`)
        .then(response => response.json())
        .then(response => this.setState({ followers: response }))
        .catch(err => console.log('errors in API followers request'));
  }

    render() {
      return (
        <div className="App">
          <h1>Github Card Followers</h1>
          <UserCard user={this.state.user} />
          <OtherCard followers={this.state.followers} />
        </div>
        );
    }
}

export default App;
