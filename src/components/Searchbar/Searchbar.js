import { useState, useContext } from 'react';
// import PropTypes from 'prop-types';
import { FiSearch } from 'react-icons/fi';
import {
  SearchbarSt,
  SearchFormSt,
  SearchFormButtonSt,
  SearchFormInputSt,
} from './Searchbar.styled';

import { CounterContext } from 'components/App/App';

const Searchbar = () => {
  const [query, setQuery] = useState('');

  // "UseContext"
  const { onSubmit } = useContext(CounterContext);
  // Запис значення в "Інпут"
  const handleInput = e => {
    const newQuery = e.target.value.toLowerCase().trim();
    setQuery(newQuery);
  };

  // Ориманння значення при "Сабміті"
  const handleSubmit = e => {
    e.preventDefault();
    if (query === '') {
      alert('Ведіт щось в пошук.');
      return;
    }
    // "Пропси" з "App"
    onSubmit(query);
    setQuery('');
  };

  return (
    <>
      <SearchbarSt>
        <SearchFormSt onSubmit={handleSubmit}>
          <SearchFormButtonSt type="submit">
            <FiSearch size="16px" />
          </SearchFormButtonSt>

          <SearchFormInputSt
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
            onChange={handleInput}
          />
        </SearchFormSt>
      </SearchbarSt>
    </>
  );
};

export default Searchbar;
