import { Component } from 'react';
import CardList from './components/card-list/card-list.compnent';
import Searchbox from './components/search-box/search-box.component';
import './App.css';

const App = () => {
  const onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  }

  return (
    <div className='App'>
      <h1 className='app-title'>Monsters Rolodex </h1>
      <Searchbox
        className='monster-search-box'
        onChangeHandler={onSearchChange}
        placeholder={'Search Monster'} />
      {/* <CardList monster={filteredMonsters} /> */}
    </div>
  );
};
// class App extends Component {

//   constructor() {
//     super();
//     this.state = {
//       monster: [],
//       searchField: ''
//     };
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(
//           () => {
//             return { monster: users };
//           },
//         )
//       );
//   }

// onSearchChange = (event) => {
//   const searchField = event.target.value.toLocaleLowerCase();
//   this.setState(() => {
//     return { searchField };
//   });
// }

//   render() {
//     const { monster, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monster.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });

//     return (
// <div className='App'>
//   <h1 className='app-title'>Monsters Rolodex </h1>
//   <Searchbox
//     className='monster-search-box'
//     onChangeHandler={onSearchChange}
//     placeholder={'Search Monster'} />
//   <CardList monster={filteredMonsters} />
// </div>
//     );
//   }
// }

export default App;
