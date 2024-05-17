import css from './SearchBar.module.css';
import { Formik, Form, Field } from 'formik';
// import toast, { Toaster } from 'react-hot-toast';

export default function SearchBar({ onSearch }) {
  return (
    <header>
      <Formik
        initialValues={{ query: '' }}
        onSubmit={(values, actions) => {
        // if (values.query!==''){
            onSearch(values.query);
        // }else{
        //     toast('Enter search text!');
        //     console.log('error');
        // }
            actions.resetForm();
          
        }}
      >
        <Form className={css.form}>
          <Field
            className={css.input}
            type="text"
            placeholder="Search images and photos"
            name="query"
          />
          <button type="submit">Search</button>
          <Toaster />
        </Form>
      </Formik>
      {/* <form>
        <input type="text" placeholder="Search images and photos" />
        <button className={css.btn} onClick={onSubmit}>
          Search
        </button>
        <Toaster />
      </form> */}
    </header>
  );
}
