import css from './SearchBar.module.css';
import { Formik, Form, Field } from 'formik';
 import toast, { Toaster } from 'react-hot-toast';

 

export default function SearchBar({ onSearch }) {
  const notify = () => toast('Enter search text!!!');
  return (
    <header>
      <Formik
        initialValues={{ query: '' }}
       onSubmit={(values, actions) => {
        onSearch(values.query);
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
          <button type="submit" onClick={notify}>Search</button>
          <Toaster />
        </Form>
      </Formik>
    </header>
  );
}
