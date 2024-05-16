import css from './SearchBar.module.css';
import toast, { Toaster } from 'react-hot-toast';

export default function SearchBar() {
  const onSubmit = () => {
    toast('Enter search text!');
    console.log('error');
  };
  return (
    <header>
      <form>
        <input type="text" placeholder="Search images and photos" />
        <button className={css.btn} onClick={onSubmit}>
          Search
        </button>
        <Toaster />
      </form>
    </header>
  );
}
