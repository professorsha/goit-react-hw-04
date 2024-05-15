import css from './SearchBar.module.css';

export default function SearchBar() {
  return (
    <header>
      <form>
        <input
          type="text"
      
          placeholder="Search images and photos"
        />
        <button className={css.btn} type="submit">Search</button>
      </form>
    </header>
  );
}
