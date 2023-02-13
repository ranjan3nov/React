import { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monster: [],
    };
    console.log('1')
  }


  componentDidMount() {
    console.log('3');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monster: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  render() {
    console.log('2')
    return (
      <div className='App'>
        {this.state.monster.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
