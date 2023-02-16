import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.compnent';
import Searchbox from './components/search-box/search-box.component';
import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monster, setMonster] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monster);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonster(users));

  }, []);

  useEffect(() => {
    const newFilteredMonster = monster.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonster);
  }, [monster, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };
  return (
    <div className='App'>
      <h1 className='app-title'>Monsters Rolodex </h1>
      <Searchbox
        className='monster-search-box'
        onChangeHandler={onSearchChange}
        placeholder='Search Monster'
      />
      <CardList monster={filteredMonsters} />
    </div>
  );
};
export default App;
