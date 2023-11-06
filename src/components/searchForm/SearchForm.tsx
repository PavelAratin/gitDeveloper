import { useRef } from 'react';
import Button from '../buttons/button/Button';
import Error from '../error/Error';

import searchIcon from '../../assets/images/icon-search.svg';

import styles from './SearchForm.module.css';

interface SearchProps {
  hasError: boolean;
  getDeveloper: (text: string) => void
}

const SearchForm = ({ hasError, getDeveloper }: SearchProps) => {
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const text = searchInputRef.current?.value || '';
    if (text) {
      getDeveloper(text)
      if (searchInputRef.current) {
        searchInputRef.current.value = '';
      }
    }
    console.log('submit form');
  }
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <img src={searchIcon} alt="Search username" />
      <input
        className={styles['form__input']}
        type="text"
        placeholder='Search github username...'
        ref={searchInputRef}
      />
      {hasError &&
        <Error text='No result ...'></Error>
      }
      <Button type='submit'>Search</Button>
    </form>
  )
}

export default SearchForm;