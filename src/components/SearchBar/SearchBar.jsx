import css from './SearchBar.module.css';
import { FaSearch } from "react-icons/fa";
import { Formik, Form, Field } from 'formik';
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast('Enter search text!!!');

export default function SearchBar({ onSearch }) {
  return (
    <header>
      <Formik
        initialValues={{ query: '' }}
        onSubmit={(values, actions) => {
          if (values.query === '') {
            notify();
          } else {
            onSearch(values.query);
            actions.resetForm();
          }
        }}
      >
        <Form className={css.form}>
          <Field
            className={css.input}
            type="text"
            placeholder="Search images and photos"
            name="query"
          />
          <button className={css.btn} type="submit">
            <FaSearch />
          </button>
          
          <Toaster />
        </Form>
      </Formik>
    </header>
  );
}
